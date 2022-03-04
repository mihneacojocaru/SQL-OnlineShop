class Product {

    constructor(id,name,price,description,image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    returnProductText = () => {

        let text = "";

        text += "Product name: " + 
                this.name +
                "; Price: " +
                this.price + 
                "; Description: " +
                this.description +
                "; ImageUrl: " +
                this.image;

        return text;

    }

}

export default Product;