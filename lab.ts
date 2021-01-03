interface Mountain {
    name: string; 
    height: number; 
}

const mountains: Mountain[] = [
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

function findNameOfTallestMountain(mtns: Mountain[]): string{
    let nameOfTallest: string = ""; 
    let highest: number = 0;
    for (let mtn of mtns){
        if(mtn.height > highest){
            highest = mtn.height; 
            nameOfTallest = mtn.name; 
        }
    }
    return nameOfTallest;
}
let tallest : string = findNameOfTallestMountain(mountains); 
console.log(tallest); 



interface Product {
    name: string; 
    price: number; 
}

const products: Product[] = [
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

function calcAverageProductPrice(prods: Product[]): number{
    let total: number = 0; 
    for(let i = 0; i < prods.length; i++){
        total += prods[i].price; 
    }; 
    return total/ prods.length; 
}

let average : number = calcAverageProductPrice(products); 
console.log(average); 



interface InventoryItem {
     product: Product; 
     quantity: number; 
 }

const inventory: InventoryItem[] = [
 {
    product: {name: "motor",  price: 10},  
    quantity: 10  
}, 
{
    product: {name: "sensor", price: 12.5},
    quantity: 4
}, 
{
    product: {name: "LED", price: 1},
    quantity: 20
}
];

function calcInventoryValue(items: InventoryItem[]): number{
    let total: number = 0; 
    for(let item of items){
        total += (item.product.price * item.quantity);  
    }; 
    return total; 
}

let totalInventory: number = calcInventoryValue(inventory); 
console.log(totalInventory); 


