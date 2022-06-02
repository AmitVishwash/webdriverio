const LoginPage = require('../pageObjects/loginPage');
const SecurePage = require('../pageObjects/secure.page');

describe('Heroku App Login Module', () => {
    it('Should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'You logged into a secure area!');
    }); 

    it('Should not login with invalid credentials(Valid username and Invalid password)', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith','SuperSecretPassword')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Your password is invalid!');
    }); 

    it('Should not login with invalid credentials(Invalid username and Valid password)', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith1','SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Your username is invalid!');
    }); 

    it('Should not login with invalid credentials(Invalid username and Invalid password)', async () => {
        await LoginPage.open();
        await LoginPage.login('amit','SuperSecretPa')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
           'Your username is invalid!');
    }); 

    it('Should login with valid credentials and logout successfuly', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
          'You logged into a secure area!');
          console.log('Sub Header Text is :',await SecurePage.subHeader.getText());
        await expect(SecurePage.subHeader).toHaveTextContaining(
            'Welcome to the Secure Area. When you are done click logout below.');
        await expect(SecurePage.logoutBtn).toHaveTextContaining(
                'Logout')
        await expect(SecurePage.footerElement).toHaveTextContaining(
                    'Elemental Selenium');
        await SecurePage.logoutBtn.click();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged out of the secure area!');
    }); 
});
