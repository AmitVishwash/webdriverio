const { default: $$ } = require("webdriverio/build/commands/browser/$$");
const CommonPage = require("./commonpage");

class HomePage extends CommonPage{

// selectors

get mainHeading(){ return $('h1.heading')};
get subHeading(){return $('h2')};

 specificElement(element){ return $(`//ul/li/a[contains(text(),'${element}')]`)};

 get allElementList(){
     return browser.$$('//ul/li/a');
 }

   allElementListNames(){
   return  this.allElementList.filter(element=>{
        console.log(element.getText());
    });
}

get lastElementLink(){
    return $(`//ul/li/a[text()='WYSIWYG Editor']`)
}


sizeOfElements(){
    return this.allElementList.length;    
}


 open(){return super.open('/')}


}

module.exports= new HomePage();