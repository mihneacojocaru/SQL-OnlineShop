import Data from "../Data/data.js";

export default class ViewHome{
    
    constructor(){
        this.data = new Data();
        this.root = document.getElementById('root');
        this.root.innerHTML += this.shoppingCart();
        this.root.innerHTML += this.productsTable();
        this.populateProductTable();
        this.addToCart();
    }

  
    //--- API FUNCTIONS

    getProducts = async () => {
        const products = await this.data.getProducts();
        return products;
    }

    //--- HTML FUNCTIONS

    productsTable = () => {
        return `
        <div class="container-fluid">
        <h2>Products</h2>
        <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Image Url</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody id="productsTable">
            </tbody>
          </table>
        </div>
        `;
    }

    productTableRow = (item) =>{

        return `<tr data-value="${item.id}">
        <td>${item.product_name}</td>
        <td>${item.image_url}</td>
        <td><span>${item.price}</span><span>€</span></td>
        <td><span>${item.stock}</span><span> units</span></td>
        <td><button id="btnToCart" class="btn btn-primary">Add to cart</button></td>
        </tr>`;

    }

    populateProductTable = async () => {

        const data = await this.getProducts();
        const table = document.getElementById('productsTable');



        data.forEach(element => {
            table.innerHTML += this.productTableRow(element);
        });


        
    }

    //--- Shopping Cart

    shoppingCart = () => {
        return `<div class="container-fluid">
        <h2>Shopping Cart</h2>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">TOTAL</th>
              </tr>
            </thead>
            <tbody id="shoppingCart"></tbody>
          </table>
    </div>`;
    }

    shoppingCartItem = (item) => {
        return `<tr>
                    <td>${item.product_name}</td>
                    <td>${item.quantity}</td>
                    <td><span>${item.price}</span><span> €</span></td>
                    <td></td>
                </tr>`;
    }

    totalCart = (summ) => {
        return `
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><span>${summ}</span><span> €</span></td>
              </tr>
        `;
    }

    addToCart = () => {

        setTimeout(()=>{
            
            let btn = document.querySelectorAll('#btnToCart');

            btn.forEach( e => {
                e.addEventListener('click', this.eventHandler);
            });
        }, 200);

    }

    eventHandler = (e) => {
        let obj = e.target;
        let item = {};

        item.product_name = obj.parentElement.parentElement.children[0].textContent;
        item.price = obj.parentElement.parentElement.children[2].children[0].textContent;
        item.quantity = 1;
        console.log(item)

        let cart = document.getElementById('shoppingCart');
        
        cart.innerHTML += this.shoppingCartItem(item);

    }
}