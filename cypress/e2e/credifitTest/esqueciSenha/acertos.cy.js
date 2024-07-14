/// <reference types="Cypress"/>


describe('Login Page',  () => { 

  beforeEach(() => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.wait(2000);  
  });

  describe('Quando o usuario acessa a página "perdi minha conta"', () => {
      it('deve navegar para pagina "perdi minha conta" com sucesso', () => {
        cy.get('.ant-form-item-children > a').click();
        cy.wait(2000);
        cy.get('.ant-spin-container').should('exist');
        cy.contains('Insira seu e-mail para recuperar a senha').should('exist');
      });
      
      it.only('envio de e-mail com sucesso', () => {
        cy.wait(2000);
        cy.get('.ant-form-item-children > a').click();
        cy.get('#email_confirm_form_email').type('email@hotmail.com');
        cy.wait(2000);
        cy.get('.ant-btn').click();
        cy.wait(2000);
        cy.get('.ant-alert').should('exist');
        cy.contains('Um link para recuperação da senha foi enviado para seu e-mail.').should('exist');
      });
    });
});
  
  