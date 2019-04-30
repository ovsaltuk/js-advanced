class Humburger {
    constructor(){
    this.size = 'small';
    this.toppings = [];
    this.extra = [];
    }
    _createBurger(){
        this._fetchToppings();
        this._fetchExtra();
        this._setSize();
        this._setToppings();
        this._setExtra();

    }
    _fetchToppings(){
        this.toppings = [
            {name: 'cheese', calories: 20, price: 10},
            {name: 'salad', calories: 5, price: 20},
            {name: 'potato', calories: 10, price: 15},
        ]
    }
    _fetchExtra(){
        this.extra = [
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
                this.toppings.push(el.value);
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
                this.extra.push(el.value)
            }
        }
    }
}

