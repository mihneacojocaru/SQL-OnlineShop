import Customers from "../model/customers.js";

class ControllerCustomers{

    constructor(){
        this.list = [];
        this.read();
    }   

    read = () => {

        this.list = [];

        for(let i=0; i<localStorage.length; i++){

            let obj = localStorage.getItem(localStorage.key(i));

            obj = JSON.parse(obj);

            if(obj.id.includes("c")){

                let customer = new Customers(obj.id,obj.email,obj.password,obj.full_name,obj.billing_address,obj.default_shipping_address,obj.country,obj.phone);

                this.list.push(customer);


            }

        }

    };

    printToConsole(){

        this.list.forEach(e => {
            console.log(e.returnCustomersText());
        })

    }

    returnCustomerObject(id){
        for(let i=0;i<this.list.length; i++){
            if(this.list[i].id == id){
                return this.list[i];
            }
        }
    }

    updateDefaultShippingAddress(id,address){
        let obj = this.returnCustomerObject(id);

        obj.default_shipping_address = address;

        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }

}

export default ControllerCustomers;