

const { default: $ } = require('webdriverio/build/commands/browser/$');
const CommonPage = require('./commonpage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends CommonPage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return browser.$('#flash');
    }

    get subHeader(){
        return browser.$('.subheader');
    }

    get logoutBtn(){
        return browser.$('.button.secondary.radius>i')
    }

    get footerElement(){

        return browser.$(`//a[contains(text(),'Elemental Selenium')]`)
    }
}

module.exports = new SecurePage();
