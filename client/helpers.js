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

    //updateCart

    updateLocalStorage = (obj) => { };

    //functie ce verifica daca in lista de produse exista produsul cu id dat is daca da sa returneze pozitia , alfel sa returneze -1

    checkProduct = (id) => {
        let stare = -1;
        this.list.forEach((element, index) => {
            if (id == element.id) {
                stare = index;
            }
        });
        return stare;
    };

    save = () => {
        localStorage.removeItem("OnlineShopTM");
        localStorage.setItem("OnlineShopTM", JSON.stringify(this.list));
    };
}
