const Wait = require('../pageObjects/waitPage')
const LoginPage = require('../pageObjects/loginPage')
const HomePage = require('../pageObjects/homePage');
const { expect, assert } = require('chai');
const should = require('chai').should();

describe('Heroku App Add/Remove Elements Module', () => {
    it('Should be able to add and delete elements', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Add/Remove Elements')).click();
        await Wait.AddElementBtn.click();
        await browser.pause(3000);
        expect((await Wait.DeleteElementBtn).waitForExist({ timeout: 5000 ,timeoutMsg:'Elements is not present in Dom after wait'}))
        await expect(await Wait.DeleteElementBtn.isDisplayed()).to.be.equal(true);
        
        await (await Wait.DeleteElementBtn).click();
        await browser.pause(3000);
        expect(await Wait.DeleteElementBtn.waitForExist({timeout:3000,reverse:true,timeoutMsg:'Element is still present in the DOM'}));
        expect(await Wait.DeleteElementBtn.isDisplayed()).to.be.equal(false);

    }); 

    it('Should be able to bypass the basic authentication', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Basic Auth')).click();
        browser.navigateTo("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        assert.equal(await Wait.getBasicAuthHeaderText().getText(),'Congratulations! You must have the proper credentials.','Actual and expected are not equal');
    }); 

    it('Should be able to check broken image ', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Broken Images')).click();
        
        await (await browser.getUrl()).should.equal('https://the-internet.herokuapp.com/broken_images');
        (await Wait.BrokenImageHeader.getText()).should.equal('Broken Images');
    }); 

    it('Should be able to identify elements uniquely', async () => {
        await Wait.open();
        await (await HomePage.specificElement('Challenging DOM')).click();
        
        await (await browser.getUrl()).should.equal('https://the-internet.herokuapp.com/challenging_dom');
        (await Wait.BrokenImageHeader.getText()).should.equal('Challenging DOM');
        expect(await Wait.firstBtn.waitForDisplayed()).to.be.equal(true);
        await Wait.firstBtn.click();
        expect(await Wait.secondBtn.waitForDisplayed()).to.be.equal(true);
        await Wait.secondBtn.click();
        expect(await Wait.thirdBtn.waitForDisplayed()).to.be.equal(true);
        await Wait.thirdBtn.click();
        expect (await Wait.canvas.waitForDisplayed()).to.be.equal(true);
        console.log(await Wait.canvas.getAttribute('width'));
        console.log(await Wait.canvas.getAttribute('height'));
        expect(await Wait.getEditBtn('Iuvaret9').isDisplayed()).to.be.equal(true);
        expect(await Wait.getDeleteBtn('Iuvaret9').isDisplayed()).to.be.equal(true);
        await Wait.getEditBtn('Iuvaret9').click();
        expect(await browser.getUrl()).to.be.equal('https://the-internet.herokuapp.com/challenging_dom#edit')
        await Wait.getDeleteBtn('Iuvaret1').click();
        expect(await browser.getUrl()).to.be.equal('https://the-internet.herokuapp.com/challenging_dom#delete')

    }); 



});
