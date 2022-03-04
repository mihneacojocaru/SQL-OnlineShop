class Orders {
  constructor(
    id,
    customer_id,
    ammount,
    shipping_address,
    order_address,
    order_email,
    order_date,
    order_status
  ) {
    this.id = id;
    this.customer_id = customer_id;
    this.ammount = ammount;
    this.shipping_address = shipping_address;
    this.order_address = order_address;
    this.order_email = order_email;
    this.order_date = order_date;
    this.order_status = order_status;
  }

  returnOrdersText() {
    
    let text = "";

    text += "Id: " + this.id + "\n" +
            "Customer Id: " + this.customer_id + "\n" +
            "Ammount: " + this.ammount + "\n" +
            "Shipping Address: " + this.shipping_address + "\n" +
            "Order Address: " + this.order_address + "\n" +
            "Order Email: " + this.order_email + "\n" +
            "Order Date: " + this.order_date + "\n" +
            "Order Status: " + this.order_status + "\n";
  }
}

export default Orders;
