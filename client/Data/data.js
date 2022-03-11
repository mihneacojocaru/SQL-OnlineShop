export default class Data{

    api(path, method = 'GET', body = null){
        let url = path;

        const options = {
            method,
            headers:{
                "Content-Type": "application/json;charset=utf-8",
            },
        };

        if(body != null){
            options.body = JSON.stringify(body);
        }

        return fetch(url,options);
    }

    getCustomers = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/customers");
            if(response.status == 200){
                return response.json();
            }else{
                return Promise.reject('Error');
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    addCustomer = async (item) => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/customers","POST", item);
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    updateFirstId = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/updateId");
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    logIn = async (obj) => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/customers/login","POST", obj);
            return response.json();  
        } catch (error) {
            return Promise.reject(error);
        }
    }

    //+++ PRODUCTS

    getProducts = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/products");
            if(response.status == 200){
                return response.json();
            }else{
                return Promise.reject('Error');
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    addProduct = async (item) => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/products","POST", item);
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    updateFirstProductId = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/updateProdId");
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    //+++ ORDERS

    addOrder = async (item) => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/orders","POST", item);
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    updateFirstOrderId = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/updateOrderId");
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    //+++ ORDER DETAILS

    addOrderDetails = async (item) => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/orderDetails","POST", item);
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }

    updateFirstOrderDetId = async () => {
        try {
            const response = await this.api("http://localhost:3500/db/v1/onlineStore/updateOrderDetId");
            return response.json();
        } catch (error) {
            return Promise.reject(error);
        }
    }


}