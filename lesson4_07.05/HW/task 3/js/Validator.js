class Validator {
    constructor(regExp, input, message = "error"){
        this.regExp = regExp;
        this.input = input;
        this.message = message;
        this.init();
    }

    getInput(){
        return document.querySelector(`.${this.input}`);
    }

    isValid(){
        return this.regExp.test(this.getInput(this.input).value);
    }

    getMessage(message){

    }
    init(){
        this.getInput();
    }

}