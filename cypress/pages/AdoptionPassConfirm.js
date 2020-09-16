export const AdoptionPassConfirm = {
    pageUrl: 'adoption_pass_confirm.html',

    verifyTextAdoptionSetUp() {
        cy.get('.content p').should('be.visible').should('include.text', 'ADOPTION HAS BEEN SET UP');
    },
};
