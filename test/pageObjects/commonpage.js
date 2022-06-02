
module.exports = class CommonPage{ 
    
    open(path){
       return  browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}