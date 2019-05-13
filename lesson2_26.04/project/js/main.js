class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.products = [];
        this.productsAll = [];
        this._init();
    }
    _init(){
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.products = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 34},
            {id: 4, title: 'Gamepad', price: 56},
            {id: 5, title: 'Chair', price: 120},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for(let product of this.products){
            const prodObj = new ProductItem(product);
            this.productsAll.push(prodObj);
            block.insertAdjacentHTML('beforeend', prodObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150'){
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.title}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class Cart {
    constructor(){

    }
    // Что метод делает
    some(){

    }
}
const products = new ProductsList();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 34},
//     {id: 4, title: 'Gamepad', price: 56},
//     {id: 5, title: 'Chair', price: 120},
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}" alt="${product.title}">
//                 <div class="desc">
//                     <h3>${product.title}</h3>
//                     <p>${product.price}</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
// };
//
// const renderPage = (list=products) => {
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
//
//     for(let el of list){
//         document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(el));
//     }
// };
//
// renderPage();
