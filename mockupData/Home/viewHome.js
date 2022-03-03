import Data from "../Data/data.js";

export default class ViewHome{
    constructor(){
        this.data = new Data();
    }

    getCustomers = async () => {
        const customers = await this.data.getCustomers();
        return customers;
    }

    postCustomer = async (item) => {
        await this.data.addCustomer(item);
    }

    updateCustomerId = async (item) => {  
        await this.data.updateFirstId();
    }

    user1 = {
        "full_name": "John Doe",
        "email": "example@email.com",
        "password": "testPassword",
        "billing_address": "First Str. 123",
        "default_shipping_address": "Default Str. 111",
        "country": "USA",
        "phone": "18331893147"
    }

    user2 = {
        "full_name": "Gioce Kaunim",
        "email": "gioce_k@email.com",
        "password": "testPassword",
        "billing_address": "0030 Pierstorff Lane",
        "default_shipping_address": "0030 Pierstorff Lane",
        "country": "USA",
        "phone": "18331665154"
    }   
    
    user3 = {
        "full_name": "Corena Blay",
        "email": "cblay0@photobucket.com",
        "password": "testPassword",
        "billing_address": "3212 Eliot Parkway",
        "default_shipping_address": "3212 Eliot Parkway",
        "country": "USA",
        "phone": "18331856784"
    }

    user4 = {
        "full_name": "Jennifer Isakson",
        "email": "jisakson2@clickbank.net",
        "password": "testPassword",
        "billing_address": "124 Sheridan Center",
        "default_shipping_address": "124 Sheridan Center",
        "country": "USA",
        "phone": "18356478326"
    }

    postProduct = async (item) => { 
        await this.data.addProduct(item);
    }

    updateProductId = async (item) => {
        await this.data.updateFirstProductId();
    }

    prod1 = {
        "product_name":"T-Shirt",
        "image_url":"website-goes-here",
        "price":15,
        "stock":150
    }

    prod2 = {
        "product_name":"Jeans",
        "image_url":"website-goes-here",
        "price":30,
        "stock":42
    }

    prod3 = {
        "product_name":"Shoes",
        "image_url":"website-goes-here",
        "price":45,
        "stock":80
    }

    postOrder = async (item) => { 
        await this.data.addOrder(item);
    }

    updateOrderId = async (item) => {
        await this.data.updateFirstOrderId();
    }

    order1 = {
        "customer_id":1000,
        "ammount":2,
        "order_status":"pending"
    }

    order2 = {
        "customer_id":1001,
        "ammount":2,
        "order_status":"pending"
    }

    order3 = {
        "customer_id":1002,
        "ammount":2,
        "order_status":"pending"
    }

    order4 = {
        "customer_id":1003,
        "ammount":2,
        "order_status":"pending"
    }

    postOrderDetails = async (item) => { 
        await this.data.addOrderDetails(item);
    }

    updateOrderDetId = async (item) => {
        await this.data.updateFirstOrderDetId();
    }

    ordDet1 = {
        "order_id":5000,
        "product_id":3000,
        "quantity": 2
    }
    ordDet2 = {
        "order_id":5000,
        "product_id":3001,
        "quantity": 4
    }
    ordDet3 = {
        "order_id":5001,
        "product_id":3002,
        "quantity": 3
    }
    ordDet4 = {
        "order_id":5002,
        "product_id":3000,
        "quantity": 5
    }

}