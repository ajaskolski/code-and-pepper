export const Form = {
    fillFormField(nameField, text) {
        cy.get(`input[name="${nameField}_field"]`).type(text);
    },
};
