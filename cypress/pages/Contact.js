export const Contact = {
    pageUrl: '/contact.html',

    clickButtonSendMessage() {
        cy.get('#submit_message').click();
    },

    clickRadioButtonInformation() {
        cy.get('#rinfo').click();
    },

    clickCheckboxEmailNewsletter() {
        cy.get('#cadop').click();
    },
    verifyAlertForMissingData(missingFieldName) {
        this.clickButtonSendMessage();
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains(`${missingFieldName} field is empty`);
        });
    },
};
