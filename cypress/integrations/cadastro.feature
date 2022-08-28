#language: pt

Funcionalidade: Cadastro de novos usuarios
    A fim de me cadastrar como novo usuário
    Como usuário não autenticado
    Eu quero me cadastrar na plataforma

Cenário: Usuário não autenticado acessa tela de cadastro
    Dado usuário na tela de Home
    E usuário não está cadastrado
    Quando clicar no botão de cadastre-se
    Então deve ser redirecionado para tela de Cadastro

Cenário: Novo usuário cadastrado é redirecionado para dashboard
    Dado usuário na tela de Cadastro
    E com todas as informações de cadastro preenchidas
    Quando clicar no botão de cadastrar
    Então usuário deve ser redirecionado para tela de dashboard

Cenário: Usúario que não fornecer um e-mail deve visualizar uma mensagem de erro
    Dado usuário na tela de Cadastro
    E não forneceu somente dados de email
    Quando clicar no botão de cadastrar
    Então deve visualizar mensagem de erro informando que o e-mail é obrigatório