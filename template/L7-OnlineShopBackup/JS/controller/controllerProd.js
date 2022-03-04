import Product from "../model/products.js";

class ControllerProducts{

    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {

        this.list = [];

        for(let i=0; i<localStorage.length; i++){

            let obj = localStorage.getItem(localStorage.key(i));

            obj = JSON.parse(obj);

            if(obj.id.includes("p")){

                let product = new Product(obj.id,obj.name,obj.price,obj.description,obj.image);

                this.list.push(product);

            }

        }

    }
    
    printToConsole = () => {
        this.list.forEach(e => {
            console.log(e.returnText());
        });
    }

    returnProductObject(name){

        for(let i=0; i<this.list.length; i++){

            if(this.list[i].name == name){
               
                return this.list[i];
            }

        }

        return "";


        // let obj={};
       
        // this.list.forEach(e => {

                    
        //     if(e.name== name){

        //         console.log(e.name);

        //         obj={...e};
        //     }
        // })


        // console.log(obj);
        // if(obj){

        //     return obj;
        // }

        // return "";
    }

    updateDescription(name,description){
     
        let obj=this.returnProductObject(name);

        //localStorage.removeItem(obj.id);

        obj.description=description;
        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }


}

export default ControllerProducts;