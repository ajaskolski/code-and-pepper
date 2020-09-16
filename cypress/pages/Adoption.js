export const Adoption = {
    pageUrl: '/adoption.html',
    optionSelectDateValue: {
        today: 'today',
        firstDay: 'fday',
        firstMonth: 'fMonth',
    },
    selectDateOfAdoption(option) {
        cy.get('#start_select').select(option).should('have.value', option);
    },
    clickButtonCheckDependsOnAvailbility(isAvailable) {
        cy.get(`input[available=${isAvailable}]`).click();
    },
};
