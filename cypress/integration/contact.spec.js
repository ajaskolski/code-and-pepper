import { Form, NavigationMenu } from '../components';
import { Contact, ContactConfirm } from '../pages';
import { timeout } from '../constants/timeout';
import { createUserData } from '../utils/utils';

describe('send contact form', () => {
    beforeEach(() => {
        cy.visit('');
        NavigationMenu.clickContactLink();
        //todo there is 1 xhr exception there devs should fix that - tho we still want to verify contact form // after fix we could delete cy.on block
        cy.on('uncaught:exception', () => {
            return false;
        });
        cy.verifyUrl(Contact.pageUrl, timeout.normalTimeout);
    });

    it('should send contact form successfully', () => {
        const { name, address, postcode, email } = createUserData('male');

        Form.fillFormField('name', name);
        Form.fillFormField('address', address);
        Form.fillFormField('postcode', postcode);
        Form.fillFormField('email', email);
        Contact.clickRadioButtonInformation();
        Contact.clickCheckboxEmailNewsletter();
        Contact.clickButtonSendMessage();

        cy.verifyUrl(ContactConfirm.pageUrl, timeout.normalTimeout);
        ContactConfirm.verifyTextConfirmWeGotMessage();
    });

    it('should not be able to send contact form without email, specific alert should appear', () => {
        const { name, address, postcode } = createUserData('female');

        Form.fillFormField('name', name);
        Form.fillFormField('postcode', postcode);
        Form.fillFormField('address', address);
        Contact.clickButtonSendMessage();
        Contact.verifyAlertForMissingData('Email');
    });
});
