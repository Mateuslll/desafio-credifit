/// <reference types="Cypress"/>


describe('Login Page',  () => { 

  beforeEach(() => {
    cy.visit('https://admin-develop.credifit.com.br/login');
    cy.wait(3000);  
  });
  
  describe('Quando o usuário acessa a página de login', () => {
    it.only('deve visualizar todos os elementos na página de login', () => {
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
  it('deve realizar o login com sucesso', () => {
    //Observação: como não alterei a senha a pagina destino sera a página verificadora sera a de alteração de senha
    cy.get('#login_form_email').type('testes+desafioqa@credifit.com.br');
    cy.get('#login_form_password').type('abcd1234');
    cy.get('.ant-btn').click();
    cy.wait(4000);
    cy.contains('Alterar senha').should('exist');
    cy.get('.mainWrapper___1YxwB > .ant-row-flex > .ant-col-23').should('exist')
  }); 

  describe('deve renderizar o chat após o click com sucesso', () => {
    it('quando clicar no botão', () => {
      cy.get('#blip-chat-icon').click();
      cy.wait(2000);
      cy.get('#blip-chat-container').should('exist');
    });
  });

});
  
  