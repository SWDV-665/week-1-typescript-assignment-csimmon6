class Grocery {
    constructor(name: string, quantity: number, price: number, type: string) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.type = type;
    }
}

function showArray() {
    var milk = new Grocery('Roberts 2%', 1, 3.49, 'dairy');
    var bread = new Grocery('Sarah Lee', 2, 2.99, 'bread');
    var eggs = new Grocery("Eggland\'s Best", 1, 3.99, 'dairy');

    var cart = [milk, bread, eggs];

    var output = "";
    
    for (const element of cart) {
        output += element.name + ", ";
        output += element.quantity + ", ";
        output += element.price + ", ";
        output += element.type;
        output += "<br>"
    }
        

    document.getElementById('array').innerHTML = output;
}