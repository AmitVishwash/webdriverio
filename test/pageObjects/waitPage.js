const CommonPage = require("./commonpage");

class Wait extends CommonPage
{

    get headerTitle(){ return $('h3')};
    get AddElementBtn(){ return $('div>button') };

    get DeleteElementBtn(){ return $('#elements>button') };

    getBasicAuthHeaderText(){ return $('div>p')};

    get BrokenImageHeader(){ return $('h3')};

    get firstBtn() {return $(`//a[@class='button']`)};
    get secondBtn(){return $(`//a[@class='button alert']`)};
    get thirdBtn() {return $(`//a[@class='button success']`)};

    get canvas(){ return $('#canvas')};

    getEditBtn(text){
        return $(`//tbody/tr/td[contains(text(),'${text}')]/following-sibling::td/a[contains(text(),'edit')]`)
    }

    getDeleteBtn(text){
        return $(`//tbody/tr/td[contains(text(),'${text}')]/following-sibling::td/a[contains(text(),'delete')]`)
    }

    open(){
        return super.open('/');
    }

    get  checkboxBtn2(){return $('//input[2]')};

    get  checkboxBtn1(){return $('//input[1]')};
    get contextArea(){return $('#hot-spot')};

    getHomeBtn(text){return $(`//li/a[contains(text(),'${text}')]`)}

}

module.exports =  new Wait();