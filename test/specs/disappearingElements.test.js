const Wait = require('../pageObjects/waitPage')
const LoginPage = require('../pageObjects/loginPage')
const HomePage = require('../pageObjects/homePage');
const { expect, assert } = require('chai');
const should = require('chai').should();

describe('Heroku App Dispappearing Elements Menu Module', () => {
    it('Should be able to validate if element is not present on the Page', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Disappearing Elements')).click();
        expect(await browser.getUrl()).to.be.equal('https://the-internet.herokuapp.com/disappearing_elements');
        await browser.pause(3000)
        await (await Wait.getHomeBtn('Home')).click();
        expect(await Wait.getHomeBtn('Home').waitForExist({timeout:5000,reverse:true})).to.be.equal(true);
        await (await HomePage.specificElement('Disappearing Elements')).click();
        await (await Wait.getHomeBtn('About')).click();
        expect(await Wait.getHomeBtn('About').waitForExist({timeout:5000,reverse:true})).to.be.equal(true);

        await browser.back();

        await (await Wait.getHomeBtn('Contact Us')).click();
        expect(await Wait.getHomeBtn('Contact Us').waitForExist({timeout:5000,reverse:true})).to.be.equal(true);

        await browser.back();
        await (await Wait.getHomeBtn('Portfolio')).click();
        expect(await Wait.getHomeBtn('Portfolio').waitForExist({timeout:5000,reverse:true})).to.be.equal(true);

         await browser.back();
         await  Wait.getHomeBtn('Gallery').click();
         expect(await Wait.getHomeBtn('Gallery').waitForExist({timeout:5000,reverse:true})).to.be.equal(true);
        
    });
});