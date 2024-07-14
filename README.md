# Desafio Técnico para QA - Credifit

## Login

1. **BeforeEach**
   - Um looping no qual eu insiro tanto a visita da página quanto um `wait`.

2. **Primeira automação**
   - Verifica todos os campos presentes na tela.

3. **Segunda automação**
   - Verifica se "Insira seu e-mail" renderiza à medida que e-mails inválidos são preenchidos.

4. **Senha vazia**
   - Deve renderizar "Digite sua senha" se a senha estiver vazia e o usuário inserir apenas o e-mail e acionar o botão "Entrar".

5. **E-mail vazio**
   - Deve renderizar "Insira seu e-mail" se o e-mail estiver vazio, a senha for digitada, e o botão "Entrar" for acionado.

6. **Campos obrigatórios**
   - Deve retornar os campos obrigatórios para todos que não foram preenchidos. O fluxo é verificar se ambas as renderizações de "Insira seu e-mail" e "Digite sua senha" aparecem antes de qualquer inserção de dado no campo. Após isso, é inserido senha e login, executa-se um `clear` e, depois, verifico se as renderizações são existentes.

7. **Verificação do campo de chat**
   - Clico no botão de chat e verifico se o container do chat existe no DOM.

## Esqueci a Senha

8. **Perdi minha conta**
   - Começando na tela de login, clico em "Esqueci minha senha". Após isso, verifico o container único de recuperação de senha e ainda verifico a string "Insira seu e-mail para recuperar a senha".

9. **E-mails inválidos**
   - Verifico se "Insira seu e-mail" renderiza na tela de "Esqueci a senha". Após inserir uma série de e-mails inválidos (método parecido com o teste da tela de login).

10. **Campos obrigatórios**
    - Verifico o retorno de campos obrigatórios que não foram preenchidos. De primeiro modo, entro na página e verifico se o container que fornece um flag de "Insira seu e-mail" está ativo (esperado que não exista). Após isso, insiro um e-mail, uso um `clear` e verifico se esse container existe.

11. **Envio de e-mail com sucesso**
    - Verificação de envio de e-mail com sucesso para recuperação. Após a inserção do e-mail e o clique em "Avançar", verifico tanto o container que gera o link informando o sucesso, quanto a mensagem.
