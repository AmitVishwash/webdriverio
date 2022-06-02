const CommonPage = require("./commonpage");

class LoginPage extends CommonPage{

// selectors

get usernameField(){ return $('#username')};
get pwdField(){ return $('#password')};
get btnLogin(){ return $('button[type="submit"]')};

// Actions

async login(username,password){
    await this.usernameField.setValue(username);
    browser.pause(5000);
    await this.pwdField.setValue(password);
    await this.btnLogin.click();
}



open(){
    return super.open('login');
}
}

module.exports = new LoginPage();