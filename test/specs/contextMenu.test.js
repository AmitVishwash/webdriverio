const Wait = require('../pageObjects/waitPage')
const LoginPage = require('../pageObjects/loginPage')
const HomePage = require('../pageObjects/homePage');
const { expect, assert } = require('chai');
const should = require('chai').should();

describe('Heroku App Context Menu Module', () => {
    it.skip('Should be able to right click on the element', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Context Menu')).click();
        expect(await browser.getUrl()).to.be.equal('https://the-internet.herokuapp.com/context_menu');
        expect(await Wait.contextArea.isEnabled()).to.be.equal(true);
        
        await Wait.contextArea.click({button:2});
        await browser.pause(3000);
        await Wait.contextArea.click();
        
    });

    it('Should be able to right click on the element', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Digest Authentication')).click();
        await browser.pause(2000);
        await browser.navigateTo('https://admin:admin@the-internet.herokuapp.com/digest_auth')
        await browser.pause(2000);
        expect(await  Wait.getBasicAuthHeaderText().getText()).to.equal('Congratulations! You must have the proper credentials.')
    });


     
});