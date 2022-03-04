let product = new Product("p3","USB Loudspeakers","25€","compact stereo speakers with usb connectivity","https://picsum.photos/200/300");


let product = new Product("p1","Querty Keyboard","30€","standard querty keyboard with backlight white", "https://picsum.photos/200/300");

let product = new Product("p4","Cooling Pad","25€","laptop cooling pad with silent ventilator","https://picsum.photos/200/300");

let product = new Product("p2","USB Mouse","15€","USB Mouse with silent click black","https://picsum.photos/200/300");

let product = new Product("p5","TEST","100€","Description","https://picsum.photos/200/300");

localStorage.setItem(product.id,JSON.stringify(product));


function createProduct(id){
    let product = new Product("p"+id,"Produs "+id,"100€","Description","https://picsum.photos/200/300");

    localStorage.setItem(product.id,JSON.stringify(product));
}

let customer = new Customers("user@email.com","1234","John Smith","123 Spooner Str.","321 MainBoulevard","USA", "+390123123123");

let customer = new Customers("c2","user@example.com","0123","Jane Doe","123 First Str.","321 SecondBoulevard","Canada", "+290123123123");

localStorage.setItem(customer.id,JSON.stringify(customer));

for(let i=1;i<6;i++){

    let x = new Orders("o"+i,"CustId"+i,"10 Pc","Str. Street Nr."+i,"Address"+i,"email@example.com"+"20.12.2020","shipped");
    
    localStorage.setItem(x.id,JSON.stringify(x));

}


for(let i=1;i<6;i++){

    let x = new Orders("od"+i,"OrdId"+i,"ProdId"+i,"100€","10Pc");
    
    localStorage.setItem(x.id,JSON.stringify(x));

}


for(let i=1;i<6;i++){

    let x = new Customers("CstId"+i,"email@email.com","John Doe","Address"+i,"Shipping Address"+i,"USA","+3012312312"+i);
    
    localStorage.setItem(x.id,JSON.stringify(x));

}