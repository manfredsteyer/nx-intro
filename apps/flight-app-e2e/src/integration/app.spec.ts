// apps/flight-app-e2e/src/integration/app.spec.ts

describe('flight-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    
    cy.get('h1').contains('Flights');
    cy.screenshot('result');
    cy.get('table').screenshot('table');

  });
});
