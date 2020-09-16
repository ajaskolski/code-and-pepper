import '../support/'
import { NavigationMenu } from '../components'
import { Adoption, AdoptionFail, AdoptionPass, AdoptionPassConfirm } from '../pages';
import { timeout } from '../constants/timeout';
import { createUserData} from '../utils/utils'

describe('should verify possibility of adoption', () => {
    beforeEach(() => {
        cy.visit('');
        NavigationMenu.clickAdoptionLink();
        cy.verifyUrl(Adoption.pageUrl, timeout.normalTimeout);

    });

    it('should not be able to adopt animal', () => {
        const isAvailable = 'no';

        Adoption.selectDateOfAdoption(Adoption.optionSelectDateValue.firstDay);
        Adoption.clickButtonCheckDependsOnAvailbility(isAvailable);

        cy.verifyUrl(AdoptionFail.pageUrl, timeout.normalTimeout);
        AdoptionFail.verifyTextUnavailableAnimal();
    });

    it('should be able to adopt animal', () => {
        const isAvailable = 'yes';
        const {name, address, postcode, email} = createUserData('male');

        Adoption.selectDateOfAdoption(Adoption.optionSelectDateValue.firstDay);
        Adoption.clickButtonCheckDependsOnAvailbility(isAvailable);

        cy.verifyUrl(AdoptionPass.pageUrl, timeout.normalTimeout);
        AdoptionPass.verifyTextAvailableAnimal();
        AdoptionPass.fillFormFieldByName('name',name);
        AdoptionPass.fillFormFieldByName('address',address);
        AdoptionPass.fillFormFieldByName('postcode', postcode);
        AdoptionPass.fillFormFieldByName('email',email);
        AdoptionPass.clickButtonSubmitAdoption();

        cy.verifyUrl(AdoptionPassConfirm.pageUrl);
        AdoptionPassConfirm.verifyTextAdoptionSetUp();
    });
});
