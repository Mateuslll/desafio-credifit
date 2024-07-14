/// <reference types="Cypress"/>


describe('Login Page',  () => { 

  beforeEach(() => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.wait(2000);  
  });
  
  describe('Quando o usuario acessa a página de login', () => {
    it('deve renderizar "Insira seu e-email" se um e-mail digitado for inválido', () => {
      const emailsInvalidos = [
        'email',
        'email@',
        'email@com',
        'email.com',
        'email@.com',
        'email@com.',
      ];
      cy.get('#login_form_password').type('abcd1234');
      for (const email of emailsInvalidos) {
        cy.get('#login_form_email').type(email);
        cy.get('.ant-btn').click();
        cy.get('#login_form_email').clear();
        cy.contains('Insira seu e-mail').should('exist');
      }
    }); 
    it('deve renderizar "Usuário ou senha incorreto" após o click do buttão de login', () => {
      cy.get('.ant-alert').should('not.exist');
      cy.contains('Usuário ou senha incorreto').should('not.exist');
      cy.get('#login_form_email').type('email@hotmail.com');
      cy.get('#login_form_password').type('abcd1234');
      cy.get('.ant-btn').click();
      cy.get('.ant-alert').should('exist');
      cy.contains('Usuário ou senha incorreto').should('exist');
    });
  
    it('deve renderizar "Digite sua senha" se a senha estiver vazia', () => {
      cy.get('#login_form_email').type('email@hotmail.com');
      cy.get('.ant-btn').click();
      cy.contains('Digite sua senha').should('exist');
    });
  
    it('deve renderizar "Insira seu email" se o e-mail estiver vazio', () => {
      cy.get('#login_form_password').type('abcd1234');
      cy.get('.ant-btn').click();
      cy.contains('Insira seu e-mail').should('exist');
    });
  
    it('deve retornar campos obrigatórios para todos que não foram preenchidos', () => {
      cy.contains('Insira seu e-mail').should('not.exist');
      cy.contains('Digite sua senha').should('not.exist');
      cy.wait(2000);
      cy.get('#login_form_email').type('email@hotmail.com');
      cy.get('#login_form_password').type('abcd1234');
      cy.get('#login_form_email').clear();
      cy.get('#login_form_password').clear();
      cy.wait(4000);
      cy.contains('Insira seu e-mail').should('exist');
      cy.contains('Digite sua senha').should('exist');
    });
  });
});
  
  