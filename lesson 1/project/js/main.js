const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 34},
    {id: 4, title: 'Gamepad', price: 56},
    {id: 5, title: 'Chair', price: 120},
    {id: 6, title: 'Monitor', price: 500},
    {id: 7 }
];

const renderProduct = (title = 'Product', price = 0) => {
    return `<div class="product-item">
                <h3 class="product-item__title">${title}</h3>
                <p>${price}</p>
                <button class="button button_buy">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML =
        list.map(item => renderProduct(item.title, item.price)).join(' ');
};

renderPage(products);
