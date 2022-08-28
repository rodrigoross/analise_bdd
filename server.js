const http = require('http')
const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.set('clientPath', __dirname + 'client');

// Simular banco de dados
const artigos = [];
const users = [];

function startServer(porta) {
    const httpServer = http.createServer(app).listen(porta, function () {
        console.log('Servidor escutando na porta: ' + this.address().port)
    })
    return httpServer
}

module.exports.startServer = startServer

app.get('/', async function (req, res) {
    res.sendFile(__dirname + '/src/home.html')
});

app.get('/login', async function (req, res) {
    res.sendFile(__dirname + '/src/login.html')
});

app.get('/cadastrar', async function (req, res) {
    res.sendFile(__dirname + '/src/cadastro.html')
});

app.get('/dashboard', async function (req, res) {
    res.sendFile(__dirname + '/src/dashboard.html')
});

app.get('/artigo/novo', async function (req, res) {
    res.sendFile(__dirname + '/src/novo-artigo.html')
});

app.post('/api/login', async function (req, res) {
    console.log('novo cadastro', req.body);
    const email = req.body.email
    const senha = req.body.senha

    if (!isEmailValido(email)) return res.send({ mensagem: "email inválido, favor tentar novamente" })
    let consulta = users.find(user => user.email === email);

    if (consulta && consulta.senha === senha) {
        res.send({ mensagem: "Autenticado" })
    }

    res.send({ mensagem: "Credenciais inválidas" })
});

app.post('/api/cadastrar', (req, res) => {
    console.log('novo cadastro', req.body);

    const email = req.body.email
    const senha = req.body.senha
    const confirme = req.body.confirme

    if (email == "") res.status(412).json({ mensagem: "E-mail é obrigatório" })
    if (senha !== confirme) res.status(412).json({ mensagem: "Senhas informadas são divergentes" })

    users.push({ email, senha })
    res.json({ mensagem: "Cadastro realizado com sucesso" })
});

app.post('/api/artigo/novo', async function (req, res) {
    console.log('novo artigo', req.body);
    const titulo = req.body.titulo
    const corpo = req.body.corpo

    artigos.push({ titulo, corpo })
    res.send({ mensagem: "Artigo publicado com sucesso" })
});

function isEmailJaExiste(email) {
    return !!users.find(user => user.email == email)
}

function isEmailValido(email) {
    return email.search('@') == -1 ? false : true
}