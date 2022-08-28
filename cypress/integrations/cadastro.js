describe("Usuário não autenticado acessa tela de cadastro", () => {
    Given('usuário na tela de Home', () => {
        cy.visit("http://localhost:9088/");
    });

    And("usuário não está cadastrado", () => { })

    When("clicar no botão de cadastre-se", () => {
        cy.get("a[id='cadastrar']")
            .should('have.attr', 'href', 'http://localhost:8088/cadastrar')
            .click();
    })

    Then("deve ser redirecionado para tela de Cadastro", () => {
        cy.url()
            .should('be.equal', 'http://localhost:9088/cadastrar');
    })
})

describe("Novo usuário cadastrado é redirecionado para dashboard", () => {
    Given('usuário na tela de Cadastro', () => {
        cy.visit("http://localhost:9088/cadastrar");
    });

    And("com todas as informações de cadastro preenchidas", () => {
        cy.get("input[id='email']").type('teste@teste.com');
        cy.get("input[id='senha']").type('123Mudar');
    })

    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='btn-cadastro']")
            .click();
    })

    Then("usuário deve ser redirecionado para tela de dashboard", () => {
        cy.url()
            .should('be.equal', "http://localhost:9088/dashboard");
    })
})

describe("Usuário que não fornecer um e-mail deve visualizar uma mensagem de erro", () => {
    Given('usuário na tela de Cadastro', () => {
        cy.visit("http://localhost:9080/cadastrar");
    });

    And("com todas as informações de cadastro preenchidas", () => {
        cy.get("input[id='senha']").type('123Mudar');
    })

    When("clicar no botão de cadastrar", () => {
        cy.get("button[id='btn-cadastro']")
            .click();
    })

    Then("deve visualizar mensagem de erro informando que o e-mail é obrigatório", () => {
        cy.contains("E-mail é obrigatório");
    })
})