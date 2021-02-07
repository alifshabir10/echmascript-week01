const listProduct = [
    {
        id: 1,
        names: "Laptop Dell",
        price: 1500.00,
        variant: {
            type: "Gamer",
            core: "i7 Core"
        }
    },
    {
        id: 2,
        names: "Laptop Dell",
        price: 1500.00,
        variant: {
            type: "Notebook",
            core: "i5 Core"
        },
    }
];

const filterProductByPrice = (products,id) => {
    return products.filter(x => x.id === id);
}

let result = filterProductByPrice(listProduct, 1);
console.log(result);


