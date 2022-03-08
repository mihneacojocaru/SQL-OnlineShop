import Data from "../Data/data.js";
import Helper from "../helpers.js";

export default class ViewHome{
    
    constructor(){
        this.data = new Data();
        this.root = document.getElementById('root');
        this.root.innerHTML += this.navbar();
        this.root.innerHTML += this.aside();
        this.root.innerHTML += this.main();
        this.populateCardContainer();
        this.shoppingCart();
        this.addToLocalStorage();
        this.populateCart();
        this.changeItemQuantity();
        this.changeBasketNumber();
        this.deleteFromCart();
    }

  
    //--- API FUNCTIONS

    getProducts = async () => {
        const products = await this.data.getProducts();
        return products;
    }

    //--- HTML FUNCTIONS

    navbar = () => {
        return `<nav>
        <h1>Online Shop &trade;</h1>
                </nav>`;
    }

    aside = () => {
        return `
        <aside>
        <i id="cartToggleBtn" class="fa-solid fa-bag-shopping"></i>
        <span class="logo">kz_</span>
        <ul class="main-categories">
            <li>ALL</li>
            <li>Men's</li>
            <li>Woman's</li>
            <li>Kids</li>
        </ul>
        <ul class="second-categories">
            <li>Our Journal</li>
            <li>About Us</li>
            <li>Help/FAQ</li>
            <li>Get In Touch</li>
            <li></li>
            <li>Login</li>
        </ul>
    </aside>
                `;
    }

    main = () => {
        return `
        <main>
            <div class="shopping-cart hide-element"></div>
            <div class="cover-img">
                <img src="./Assets/Summer-Fashion-Facebook-Cover-Design-Template.jpeg" alt="fashion-cover">
            </div>
            <div class="content card-container">
                <div class="card">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0584/0617/4905/products/p4_1_420x.jpg?v=1625561220" alt="t-shirt picture">
                    </div>
                    <div class="info">
                        <div class="left-item">
                            <span>Name</span>
                            <span>36€</span>
                        </div>
                        <div class="right-item">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0584/0617/4905/products/p5_1_840x.jpg?v=1625561212" alt="t-shirt picture">
                    </div>
                    <div class="info">
                        <div class="left-item">
                            <span>Name</span>
                            <span>36€</span>
                        </div>
                        <div class="right-item">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
        `;
    }


    card = (item) => {
        return `
        <div class="card">
                    <div class="image">
                        <img src="${item.image_url}" alt="t-shirt picture">
                    </div>
                    <div class="info">
                        <div class="left-item">
                            <span>${item.product_name}</span>
                            <span>${item.price}€</span>
                        </div>
                        <div class="right-item">
                            <button data-id="${item.id}" id="addToCart">Add to cart</button>
                        </div>
                    </div>
                </div>
        `;
    }

    populateCardContainer = async () => {

        let cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = "";

        const data = await this.getProducts();

        data.forEach( e => {
            cardContainer.innerHTML += this.card(e);
        });


    }

    
    //--- Shopping Cart

    shoppingCart = () => {
        let cart = document.querySelector('.shopping-cart');
        let cartToggleBtn = document.querySelector('#cartToggleBtn');
        
        cart.innerHTML += this.shoppingCartContent();
        let helper = new Helper();
        let totalCart = document.getElementById('totalCart');
            totalCart.textContent = `Total: ${helper.getTotalCartAmmount()}€`;

        cartToggleBtn.addEventListener('click', ()=> {
            cart.classList.toggle('hide-element');
        })
    }

    shoppingCartContent = () => {
        return `
                <span class="cart-item-no">0 product in your cart</span>
                <div class="products cart-products"></div>
                <div class="spacer"></div>
                <div class="total-info">
                    <span id="totalCart">Total: 0,00€</span>
                    <span>Shipping & taxes are calculated at checkout</span>
                    <button>Check Out</button>
                </div>
        `;
    }


    miniCard = (item) => {
        return `<div class="mini-card">
        <img src="${item.image_url}" alt="t-shirt">
        <div class="info-mini">
            <div class="left-item-mini">
                <span>${item.product_name}</span>
                <span>${item.price*item.quantity}€</span>
            </div>
            <div class="right-item-mini">
                <input id="item-quantity-input" min="1" value="${item.quantity}" data-id="${item.id}" type="number">
                <span id="removeMiniCard" data-id="${item.id}">X</span>
            </div>
        </div>
    </div>`;
    }

    addToLocalStorage = () => {
        setTimeout(()=>{
            let btnAddToCart = document.querySelectorAll('#addToCart');
            btnAddToCart.forEach( e => {
                e.addEventListener('click', this.eventHandler);
            });
        },100);
    }

    changeItemQuantity = () => {
        let cart = document.querySelectorAll('#item-quantity-input');
        cart.forEach( e => {
            e.addEventListener('change', this.eventHandler);
        });
    }

    changeBasketNumber = () => {
        let miniCard = document.querySelectorAll('.mini-card');
        let basket = document.getElementById('cartToggleBtn');
        let cartItemNo = document.querySelector('.cart-item-no');
        if(miniCard == null){
            basket.setAttribute('data-after', '0');
        }else{
            basket.setAttribute('data-after', miniCard.length);
            if(miniCard.length == 1){
                cartItemNo.innerHTML = `${miniCard.length} product in your cart`;
            }else{
                cartItemNo.innerHTML = `${miniCard.length} products in your cart`;
            }
        }
    }

    deleteFromCart = () => {
        let xBtn = document.querySelectorAll('#removeMiniCard');
        let helper = new Helper();
        xBtn.forEach( e => e.addEventListener('click', ()=>{
            helper.deleteAfterId(e.dataset.id);
            this.refreshCart();
        }));
        
    }


    eventHandler = e => {
        let obj = e.target;
        let item = {}

        if(obj.type == 'submit'){
            item.product_name = obj.parentElement.parentElement.children[0].children[0].textContent;
            item.price = parseInt(obj.parentElement.parentElement.children[0].children[1].textContent.replace('€',''));
            item.image_url = obj.parentElement.parentElement.parentElement.children[0].children[0].src; 
            item.id = obj.dataset.id;
            item.quantity = 1;
            let helper = new Helper();
            helper.addToCart(item);
            this.refreshCart();
        }else if(obj.id = 'item-quantity-input'){
            let helper = new Helper();
            helper.updateLocalStorage(obj.dataset.id,parseInt(obj.value));
            let currentPrice;
            let currentQuantity = parseInt(obj.value);
            let newPrice = obj.parentElement.parentElement.children[0].children[1];
            helper.list.forEach(e => {
                if(e.id == obj.dataset.id){
                    currentPrice = e.price;
                }
            });
            newPrice.textContent = `${currentPrice * currentQuantity}€`;
            let totalCart = document.getElementById('totalCart');
            totalCart.textContent = `Total: ${helper.getTotalCartAmmount()}€`;
        }else if(obj.id == 'removeMiniCard'){
            let helper = new Helper();
            console.log(helper.list);
        }
    }

    populateCart = () => {
        let cart = document.querySelector('.cart-products');
        cart.innerHTML = '';
        const helper = new Helper();
        if(helper.list !== null){
            helper.list.forEach( e => {
                cart.innerHTML += this.miniCard(e);
            });
        }

    }

    refreshCart = () => {
        let helper = new Helper();
        this.populateCart();
        this.changeItemQuantity();
        this.changeBasketNumber();
        let totalCart = document.getElementById('totalCart');
        totalCart.textContent = `Total: ${helper.getTotalCartAmmount()}€`;
        this.deleteFromCart();
    }


    
}