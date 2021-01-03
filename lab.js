"use strict";
const mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mtns) {
    let nameOfTallest = "";
    let highest = 0;
    for (let mtn of mtns) {
        if (mtn.height > highest) {
            highest = mtn.height;
            nameOfTallest = mtn.name;
        }
    }
    return nameOfTallest;
}
let tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
const products = [
    {
        name: "Notebook",
        price: 5
    },
    {
        name: "Planner",
        price: 10
    },
    {
        name: "Pen",
        price: 2
    }
];
function calcAverageProductPrice(prods) {
    let total = 0;
    for (let i = 0; i < prods.length; i++) {
        total += prods[i].price;
    }
    ;
    return total / prods.length;
}
let average = calcAverageProductPrice(products);
console.log(average);
const inventory = [
    {
        product: { name: "motor", price: 10 },
        quantity: 10
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4
    },
    {
        product: { name: "LED", price: 1 },
        quantity: 20
    }
];
function calcInventoryValue(items) {
    let total = 0;
    for (let item of items) {
        total += (item.product.price * item.quantity);
    }
    ;
    return total;
}
let totalInventory = calcInventoryValue(inventory);
console.log(totalInventory);
