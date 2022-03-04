import Orders from "../model/orders.js";

class ControllerOrders{

    constructor(){

        this.list = [];

        this.read();
    }

    read = () => {

        this.list = [];

        for(let i=0; i<localStorage.length; i++){

            let obj = localStorage.getItem(localStorage.key(i));

            obj = JSON.parse(obj);

            if(obj.id.includes("o")){

                let order = new Orders(obj.id,obj.customer_id,obj.ammount,obj.shipping_address,obj.order_address,obj.order_email,obj.order_date,obj.order_status);
                
                this.list.push(order);

            }

        }
    }

    printToConsole = () => {

        this.list.forEach( e => {
            console.log(e.returnOrdersText());
        })

    }

    returnOrderObject(name){

        for(let i=0; i<this.list.length; i++){

            if(this.list[i].name == name){

                return this.list[i];

            }

        }

        return "";
    }

    updateShippingAddress(name, shipping_address){

        let obj = this.returnOrderObject(name);

        obj.shipping_address = shipping_address;

        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }

}

export default ControllerOrders;