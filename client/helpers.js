export default class Helper {
    constructor() {
        this.list = JSON.parse(localStorage.getItem("OnlineShopTM"));
    }

    //load

    addToCart = (obj) => {
        if (this.list !== null) {
            let ind = this.checkProduct(obj.id);
            if (ind != -1) {
                this.list[ind].quantity += obj.quantity;
            } else {
                this.list.push(obj);
            }
        } else if (this.list == null) {
            this.list = [];
            this.list.push(obj);
        }

        this.save();
    };

    getTotalCartAmmount = () => {
        let pricesArray = [];
        let quantityArray = [];
        let sum = "0,00";
        if(this.list != null){
            this.list.forEach( e =>{
                pricesArray.push(e.price);
                quantityArray.push(e.quantity);
            });
    
            let sumArray = pricesArray.map((e,index) => e * quantityArray[index]);
            
            let sum = sumArray.reduce((a,b)=>a+b);
    
            return sum;
        }
        return sum;
    }

    deleteAfterId = (id) => {
        if(this.list != null){
            this.list = this.list.filter(e => e.id != id);
            if(this.list.length == 0){
                this.list = null;
            }
            this.save();
        }
        
        
    }

    updateLocalStorage = (id,quantity) => {
        if(this.list !== null){
            this.list.forEach( e => {
                if(e.id == id){
                    e.quantity = quantity;
                }
            }); 
            this.save();
        };

    };

    //functie ce verifica daca in lista de produse exista produsul cu id dat is daca da sa returneze pozitia , alfel sa returneze -1

    checkProduct = (id) => {
        let state = -1;
        this.list.forEach((element, index) => {
            if (id == element.id) {
                state = index;
            }
        });
        return state;
    };

    save = () => {
        localStorage.removeItem("OnlineShopTM");
        localStorage.setItem("OnlineShopTM", JSON.stringify(this.list));
    };

    emptyLocalStorage = () => {
        localStorage.removeItem("OnlineShopTM");
    }
}
