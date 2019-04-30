class Hamburger {
    constructor(button = '.burger__submit'){
    this.size = 'small';
    this.allToppings = [];
    this.allExtra = [];
    this.burgerToppings = [];
    this.burgerExtra = [];
    }
    _createBurger(){
        this._burgerClear();
        this._fetchAllToppings();
        this._fetchExtra();
        this._setSize();
        this._setToppings();
        this._setExtra();

    }
    _fetchAllToppings(){
        this.allToppings = [
            {name: 'cheese', calories: 20, price: 10},
            {name: 'salad', calories: 5, price: 20},
            {name: 'potato', calories: 10, price: 15},
        ]
    }
    _fetchExtra(){
        this.allExtra = [
            {name: 'paprika', calories:0, price: 15},
            {name: 'mayo', calories: 5, price: 20}
        ]
    }
    _getSize(){
        let sizeList = document.getElementsByName('size');
        let sizeArr = Array.prototype.slice.call(sizeList);

        for (let el of sizeArr){
            if (el.checked){
                return el.value;
            }
        }
    }
    _setSize(){
        this.size = this._getSize();
    }
    _getToppings(){
        let toppingsList = document.getElementsByName('topping');
        let toppingsArr = Array.prototype.slice.call(toppingsList);
        return toppingsArr;
    }
    _setToppings(toppingsArr = this._getToppings()){
        for (let el of toppingsArr){
            if (el.checked){
                this.burgerToppings.push(el.value);
            }
        }
    }

    _getExtra(){
        let extraList = document.getElementsByName('extra');
        let extraArr = Array.prototype.slice.call(extraList);
        return extraArr;
    }
    _setExtra(extraArr = this._getExtra()){
        for (let el of extraArr){
            if (el.checked){
                this.burgerExtra.push(el.value)
            }
        }
    }
    _burgerClear(){
        this.burgerExtra.length = 0;
        this.burgerToppings.length = 0;
    }
}

let burger = new Hamburger();

document.querySelector('.burger__submit').addEventListener('click', (e)=>{
    e.preventDefault();
    burger._createBurger();
    console.log(burger);
})
