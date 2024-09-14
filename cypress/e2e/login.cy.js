
describe('Login Page Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/login'); 
    });
  
    it('displays the login form with correct fields', () => {
      // Verifica se os campos de email e senha estão presentes
      cy.get('input[placeholder="email@exemplo.com"]').should('exist');
      cy.get('input[placeholder="Insira sua senha"]').should('exist');
      cy.contains('Entrar').should('exist');
      cy.contains('Não tem uma conta?').should('exist');
    });
  
    it('shows error messages for invalid inputs', () => {
      // Insere um email inválido e senha curta
      cy.get('input[placeholder="email@exemplo.com"]').type('sci.e');
      cy.get('input[placeholder="Insira sua senha"]').type('123');
  
      // Submete o formulário
      cy.contains('Entrar').click();
  
      // Verifica se as mensagens de erro são exibidas
      cy.contains('Insira um email válido.').should('exist');
      cy.contains('A senha deve ter no mínimo 8 caracteres.').should('exist');
    });
  
    it('logs in successfully with valid credentials', () => {
      // Insere email e senha válidos
      cy.get('input[placeholder="email@exemplo.com"]').type('teste@cypress.com');
      cy.get('input[placeholder="Insira sua senha"]').type('12345678');
  
      // Submete o formulário
      cy.contains('Entrar').click();
  
      // Verifica se a notificação de sucesso é exibida
      cy.contains('Login realizado com sucesso!').should('exist');
  
      // Verifica se redireciona para o dashboard
      cy.url().should('include', '/dashboard');
    });
  
    it('shows error on failed login', () => {
      // Insere email e senha incorretos
      cy.get('input[placeholder="email@exemplo.com"]').type('usuario@exemplo.com');
      cy.get('input[placeholder="Insira sua senha"]').type('senha_incorreta');
  
      // Submete o formulário
      cy.contains('Entrar').click();
  
      // Verifica se a mensagem de erro de login é exibida
      cy.contains('Erro ao realizar login. Tente novamente.').should('exist');
    });
  });
  