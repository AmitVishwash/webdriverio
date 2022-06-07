const Wait = require('../pageObjects/waitPage')
const LoginPage = require('../pageObjects/loginPage')
const HomePage = require('../pageObjects/homePage');
const { expect, assert } = require('chai');
const should = require('chai').should();

describe('Heroku App Add/Remove Elements Module', () => {
    it('Should be able tick the checkbox element', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Checkboxes')).click();
        expect(await browser.getUrl()).to.be.equal('https://the-internet.herokuapp.com/checkboxes');
        expect(await Wait.checkboxBtn2.isSelected()).to.be.equal(true);
        await  Wait.checkboxBtn1.click();
        expect(await  Wait.checkboxBtn1.isSelected()).to.be.equal(true);
        await  Wait.checkboxBtn2.click();
        expect(await  (await Wait.checkboxBtn2).isSelected()).to.be.equal(false);
        


    });
});