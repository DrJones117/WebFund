function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzerella"], ["pepperoni, sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella, feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin crust", "barbecue", "mozzarella", "smoked chicken");
console.log(p3);

var p4 = pizzaOven("garic crust", "traditional", ["mozarella, cheddar"], ["pepperoni", "sausage", "jalapenos"]);
console.log(p4);