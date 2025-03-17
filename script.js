describe('Grofers Checkout Solution', () => {
    it('Calculates the total price correctly', () => {
        cy.visit('http://localhost:3000');  // Change URL if needed
        
        // Ensure the button exists before clicking
        cy.get('#calculate-total').should('exist');

        // Click the button
        cy.get('#calculate-total').click();

        // Wait for the total to appear
        cy.get('#ans', { timeout: 5000 }).should('have.text', '410');
    });
});
