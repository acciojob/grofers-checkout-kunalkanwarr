describe('Grofers Checkout Solution', () => {
  it('should find price elements', () => {
    // Navigate to the page where prices are displayed
    cy.visit('/your-page-url');

    // Wait for the price elements to be visible
    cy.get('.price', { timeout: 10000 }).should('be.visible');

    // Perform any additional assertions or actions
  });
});
