export const AdoptionPass = {
    pageUrl: '/adoption_pass.html',

    verifyTextAvailableAnimal() {
        cy.get('p#result')
            .should('be.visible')
            .should('include.text', 'ANIMAL AVAILABLE')
    },

    fillFormFieldByName(nameField, text){
        cy.get(`input[name="${nameField}_field"]`).type(text)
    },

    clickButtonSubmitAdoption() {
        cy.get('#submit_adoption').click()
    }
};
