class Validator {
    constructor(regExp, input, message = "error", button = "button"){
        this.regExp = regExp;
        this.input = input;
        this.message = message;
        this.button = button;
        this.init();
    }

    getInput(){
        return document.querySelector(`.${this.input}`);
    }

    isValid(){
        return this.regExp.test(this.getInput(this.input).value);
    }

    getMessage(){
        this.deleteMessage();
        if(!this.isValid()){
            this.getInput().insertAdjacentHTML('afterend', `<p class="errorMessage">${this.message}</p>`);
        }
    }

    deleteMessage(){
        let messageArr = [...document.querySelectorAll('.errorMessage')];
        for (let el of messageArr){
            el.remove();
        }
    }

    buttonListener(){
        let submit = document.querySelector(`.${this.button}`);
        submit.addEventListener('click', (e)=>{
            e.preventDefault();
            this.getMessage();
        })
    }

    init(){
        this.getInput();
        this.buttonListener();
    }

}