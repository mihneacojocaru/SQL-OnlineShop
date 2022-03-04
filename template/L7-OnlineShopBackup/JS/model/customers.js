class Customers{

    constructor(id,email,password,full_name,billing_address,default_shipping_address,country,phone) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.full_name = full_name;
        this.billing_address = billing_address;
        this.default_shipping_address = default_shipping_address;
        this.country = country;
        this.phone = phone;
    }

    returnCustomersText(){

        let text = "";

        text += "ID: " + this.id + "\n" +
                "Email: " + this.email + "\n" +
                "Password: " + this.password + "\n" +
                "Full Name: " + this.full_name + "\n" +
                "Billing Address: " + this.billing_address + "\n" +
                "Default Shipping Address: " + this.default_shipping_address + "\n" +
                "Country: " + this.country + "\n" +
                "Phone: " + this.phone + "\n";

    }

}

export default Customers;