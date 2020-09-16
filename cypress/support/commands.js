Cypress.Commands.add('verifyUrl', (url, timeout) => {
    cy.url({ timeout }).should('include', url);
});
