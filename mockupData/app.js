import ViewHome from "./Home/viewHome.js";

const btn = document.querySelector('button');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const home = new ViewHome();



const populateDB = async () => {
    const c = await home.getCustomers();
    message.textContent = '';
    message2.textContent = '';
    if(c.length == 0){
        await home.postCustomer(home.user1);
        await home.updateCustomerId();
        await home.postCustomer(home.user2);
        await home.postCustomer(home.user3);
        await home.postCustomer(home.user4);

        await home.postProduct(home.prod1);
        await home.updateProductId();
        await home.postProduct(home.prod2);
        await home.postProduct(home.prod3);

        await home.postOrder(home.order1);
        await home.updateOrderId();
        await home.postOrder(home.order2);
        await home.postOrder(home.order3);
        await home.postOrder(home.order4);

        await home.postOrderDetails(home.ordDet1);
        await home.updateOrderDetId();
        await home.postOrderDetails(home.ordDet2);
        await home.postOrderDetails(home.ordDet3);
        await home.postOrderDetails(home.ordDet4);


        message2.textContent = 'Items succesfuly posted!'
    }else{
        message.textContent = 'DB is not empty!';
    }    
}



btn.addEventListener('click',populateDB);

