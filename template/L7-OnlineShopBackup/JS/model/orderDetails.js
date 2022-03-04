class OrderDetails{

    constructor(id,orderId,productId,price,quantity){

        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.price = price;
        this.quantity = quantity;

    }

    returnOrderDetailsText = () => {

        let text = "";

        text += "Id: " + 
                this.id +
                "; Order id: " +
                this.orderId + 
                "; Product Id: " +
                this.productId +
                "; Price: " +
                this.price; + 
                "; Quantity:" +
                this.quantity;

        return text;

    }


}

export default OrderDetails;