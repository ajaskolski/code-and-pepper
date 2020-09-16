export const About = {
    pageUrl: '/about.html',

    verifyTextAbout() {
        cy.get('.content p').should('be.visible').should('include.text', 'We love our animals');
    },
};
