const { default: $ } = require("webdriverio/build/commands/element/$");

class Homepage{

// selectors

get mainHeading(){ return $('h1.heading')};
get subHeading(){return $('h2')};

////ul/li/a[contains(text(),'A/B Testing')]


}