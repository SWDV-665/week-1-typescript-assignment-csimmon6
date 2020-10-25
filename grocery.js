var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, type) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.type = type;
    }
    return Grocery;
}());
function showArray() {
    var milk = new Grocery('Roberts 2%', 1, 3.49, 'dairy');
    var bread = new Grocery('Sarah Lee', 2, 2.99, 'bread');
    var eggs = new Grocery("Eggland\'s Best", 1, 3.99, 'dairy');
    var cart = [milk, bread, eggs];
    var output = "";
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var element = cart_1[_i];
        output += element.name + ", ";
        output += element.quantity + ", ";
        output += element.price + ", ";
        output += element.type;
        output += "<br>";
    }
    document.getElementById('array').innerHTML = output;
}
