#language: pt

Funcionalidade: Cadastro de novos usuarios
    A fim de me cadastrar como novo usuário
    Como usuário não autenticado
    Eu quero me cadastrar na plataforma

Cenário: Novo usuário cadastrado recebe confirmação de cadastro
    Dado usuário na tela de Cadastro
    E com todas as informações de cadastro preenchidas
    Quando clicar no botão de cadastrar
    Então usuário deve visualizar mensagem de cadastro bem sucedido

Cenário: Usúario que não fornecer um e-mail deve visualizar uma mensagem de erro
    Dado usuário na tela de Cadastro
    E não forneceu somente dados de email
    Quando clicar no botão de cadastrar
    Então deve visualizar mensagem de erro informando que o e-mail é obrigatório

Cenário: Usuário que informar valores de senha divergentes deve visualizar erro
    Dado usuário na tela de Cadastro
    E forneceu confirmação de senha divergente
    Quando clicar no botão de cadastrar
    Então deve visualizar mensagem de erro informando que senhas não conferem