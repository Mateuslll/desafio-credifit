/// <reference types="Cypress"/>


describe('Login Page',  () => { 

  beforeEach(() => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.wait(2000);  
  });

  describe('quando o usuário acessa a página de login', () => {
    it('deve visualizar todos os elementos na página de login', () => {
      cy.get('.loginImage___3R-uX').should('exist');
      cy.get('.formContainer___N0anJ').should('exist');
      cy.get(':nth-child(1) > .ant-form-item-label > label').should('exist');
      cy.get('#login_form_email').should('exist');
      cy.get('.ant-form-item-required').should('exist');  
      cy.get('.ant-form-item-required').should('exist'); 
      cy.get('#login_form_password').should('exist');
      cy.get('.ant-btn').should('exist');
      cy.get('#blip-chat-icon').should('exist');
    });
  });
  
  describe('quando o usuário digita valores incorretos', () => {
    it('deve renderizar "e-mail inválido" se um e-mail digitado for inválido', () => {
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
  
    it('deve renderizar "campo obrigatório" se a senha estiver vazia', () => {
      cy.get('#login_form_email').type('email@hotmail.com');
      cy.get('.ant-btn').click();
      cy.contains('Digite sua senha').should('exist');
    });
  
    it('deve renderizar "campo obrigatório" se o e-mail estiver vazio', () => {
      cy.get('#login_form_password').type('abcd1234');
      cy.get('.ant-btn').click();
      cy.contains('Insira seu e-mail').should('exist');
    });
  
    it.only('deve retornar campos obrigatórios para todos que não foram preenchidos', () => {
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
  
  describe('verificar campo de chat', () => {
    it('quando clicar no botão', () => {
      cy.get('#blip-chat-icon').click();
      cy.wait(6000);
      cy.get('#email_confirm_form_email').should('exist');
      cy.get('#blip-chat-container').should('exist');
    });
  });

  describe('verificar "perdi minha conta"', () => {
      it('quando clicar no botão "perdi minha conta"', () => {
        cy.get('.ant-form-item-children > a').click();
        cy.wait(2000);
        cy.get('.ant-spin-container').should('exist');
        cy.contains('Insira seu e-mail para recuperar a senha').should('exist');
      });
    
      it('deve renderizar "e-mail inválido" se um e-mail digitado for inválido', () => {
        cy.get('.ant-form-item-children > a').click();
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
          cy.get('#email_confirm_form_email').type(email);
          cy.get('.ant-btn').click();
          cy.get('#email_confirm_form_email').clear();
          cy.contains('Insira seu e-mail').should('exist');
        }
      });
    
      it('deve retornar campos obrigatórios para todos que não foram preenchidos', () => {
        cy.wait(2000);
        cy.get('.ant-form-item-children > a').click();
        cy.contains('Insira seu e-mail').should('not.exist');
        cy.wait(2000);
        cy.get('#email_confirm_form_email').type('email@hotmail.com');
        cy.get('#email_confirm_form_email').clear();
        cy.wait(4000);
        cy.contains('Insira seu e-mail').should('exist');
      });
    
      it('envio de e-mail com sucesso', () => {
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
  
  