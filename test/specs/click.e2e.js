const { assert } = require('chai');
const homePage = require('../pageObjects/homePage');
const HomePage = require('../pageObjects/homePage')


describe('Heroku App Click Module', () => {
    it('Should be able to click and verify the element', async () => {
         await HomePage.open();
         assert.equal(await HomePage.mainHeading.getText(),'Welcome to the-internet','Actual and expected are different');
         await HomePage.specificElement('A/B Testing').click();
         console.log("Current Url is ",await browser.getUrl())
         assert.equal(await browser.getTitle(),'The Internet','Actual and expected are different');
         assert.equal(await browser.getUrl(),'https://the-internet.herokuapp.com/abtest','Actual and expected are different');
    }); 

    it('Should be able to verify all elements listed on the page', async () => {
      
        await HomePage.open();
        assert.equal(await browser.getTitle(),'The Internet','Actual and expected are different');
        assert.equal(await HomePage.mainHeading.getText(),'Welcome to the-internet','Actual and expected are different');
        await HomePage.allElementListNames();
        console.log('Total list of elements displayed on Page are: ',await homePage.sizeOfElements());
        assert.deepEqual(await homePage.sizeOfElements(),44,'Actual and expected are different');
          
   }); 

   it('Should be able to see hidden elements by scrolling on the page', async () => {
     
     await HomePage.open();
     
     assert.equal(await browser.getTitle(),'The Internet','Actual and expected are different');
     assert.equal(await HomePage.mainHeading.getText(),'Welcome to the-internet','Actual and expected are different');
     assert.isTrue(await HomePage.lastElementLink.isDisplayed());
     assert.isTrue(await HomePage.lastElementLink.isEnabled());
     assert.isFalse(await HomePage.lastElementLink.isDisplayedInViewport());
     HomePage.lastElementLink.scrollIntoView({behavior :'smooth',block:'end',inline:'nearest'});
 
}); 




});
