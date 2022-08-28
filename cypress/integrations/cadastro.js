describe("Novo usuário cadastrado recebe confirmação de cadastro", () => {
    Given('usuário na tela de Cadastro', () => {
        cy.visit("/cadastrar");
    });

    And("com todas as informações de cadastro preenchidas", () => {
        console.log("entrei");
        cy.get("input[id='email']").type('teste@teste.com');
        cy.get("input[id='senha']").type('123Mudar');
        cy.get("input[id='confirma-senha']").type('123Mudar');
    })

    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='btn-cadastro']")
            .click();
    })

    Then("usuário deve visualizar mensagem de cadastro bem sucedido", () => {
        cy.get('#retorno').contains("Cadastro realizado com sucesso")
    })
})

describe("Usuário que não fornecer um e-mail deve visualizar uma mensagem de erro", () => {
    Given('usuário na tela de Cadastro', () => {
        cy.visit("/cadastrar");
    });

    And("não forneceu somente dados de email", () => {
        cy.get("input[id='senha']").type('123Mudar');
        cy.get("input[id='confirma-senha']").type('123Mudar');
    })

    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='btn-cadastro']")
            .click();
    })

    Then("deve visualizar mensagem de erro informando que o e-mail é obrigatório", () => {
        cy.get('#retorno').contains("E-mail é obrigatório");
    })
})

describe("Usuário que informar valores de senha divergentes deve visualizar erro", () => {
    Given('usuário na tela de Cadastro', () => {
        cy.visit("/cadastrar");
    });

    And("forneceu confirmação de senha divergente", () => {
        console.log("entrei");
        cy.get("input[id='email']").type('teste@teste.com');
        cy.get("input[id='senha']").type('123Mudar');
        cy.get("input[id='confirma-senha']").type('123Diferente');
    })

    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='btn-cadastro']")
            .click();
    })

    Then("deve visualizar mensagem de erro informando que senhas não conferem", () => {
        cy.get('#retorno').contains("Senhas informadas são divergentes")
    })
})