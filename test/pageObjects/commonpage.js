
module.exports = class CommonPage{ 
    
    open(path){
        browser.maximizeWindow();
        return  browser.url(`https://the-internet.herokuapp.com${path}`);
       
    }
}