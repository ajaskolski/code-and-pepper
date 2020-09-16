import { NavigationMenu } from '../components';
import { About } from '../pages';
import { timeout } from '../constants/timeout';

describe('about us', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('about us page should work and show proper text ', () => {
        NavigationMenu.clickAboutLink();
        cy.verifyUrl(About.pageUrl, timeout.normalTimeout);
        About.verifyTextAbout();
    });
});
