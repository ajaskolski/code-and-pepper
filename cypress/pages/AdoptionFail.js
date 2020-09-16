export const AdoptionFail = {
    pageUrl: '/adoption_fail.html',

    verifyTextUnavailableAnimal() {
        cy.get('p#result').should('be.visible').should('include.text', 'ANIMAL NOT AVAILABLE');
    },
};
