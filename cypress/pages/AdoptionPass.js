export const AdoptionPass = {
    pageUrl: '/adoption_pass.html',

    verifyTextAvailableAnimal() {
        cy.get('p#result').should('be.visible').should('include.text', 'ANIMAL AVAILABLE');
    },

    clickButtonSubmitAdoption() {
        cy.get('#submit_adoption').click();
    },
};
