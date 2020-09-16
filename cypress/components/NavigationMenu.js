export const NavigationMenu = {
    clickAdoptionLink() {
        cy.get('#adoption_link').click();
    },

    clickContactLink() {
        cy.get('#contact_link').click();
    },

    clickAboutLink() {
        cy.get('#about_link').click();
    },
};
