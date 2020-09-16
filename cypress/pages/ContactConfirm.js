export const ContactConfirm = {
    pageUrl: '/contact_confirm.html',

    verifyTextConfirmWeGotMessage() {
        cy.get('.content p').should('be.visible').should('include.text', 'Many thanks for your message');
    },
};
