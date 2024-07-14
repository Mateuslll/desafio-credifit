/// <reference types="Cypress"/>


describe('Login Page',  () => { 

  beforeEach(() => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.wait(2000);  
  });

  describe('Quando o usuario acessa a página "perdi minha conta"', () => {
      it('deve renderizar "Insira seu email" se um e-mail digitado for inválido', () => {
        cy.get('.ant-form-item-children > a').click();
        const emailsInvalidos = [
          'email',
          'email@',
          'email@com',
          'email.com',
          'email@.com',
          'email@com.',
        ];
        for (const email of emailsInvalidos) {
          cy.get('#email_confirm_form_email').type(email);
          cy.get('.ant-btn').click();
          cy.get('#email_confirm_form_email').clear();
          cy.contains('Insira seu e-mail').should('exist');
        }
      });
    
      it('deve retornar campo obrigatório "Insira seu e-mail" após inserção de dado e clear do campo', () => {
        cy.get('.ant-form-item-children > a').click();
        cy.wait(2000);
        cy.get('.ant-form-explain').should('not.exist');
        cy.get('#email_confirm_form_email').type('email@hotmail.com');
        cy.get('#email_confirm_form_email').clear();
        cy.wait(4000);
        cy.get('.ant-form-explain').should('exist');
      });
    });
});
  
  