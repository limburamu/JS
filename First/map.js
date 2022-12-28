const arr = [1, 2, 3, 4];
const mapped = arr.map(test);
function test(n){
    return n * 2
}
console.log(mapped);



console.log('New problem');
const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
}
console.log(numbersDouble);


const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,
    },
    {
        name: 'desktop',
        price: 1500,
        count: 2,
    },
    {
        name: 'phone',
        price: 500,
        count: 10,
    }
];

const totalProductsValue = products.map(object => ({
    name: object.name,
    totalValue: object.price * object.count
}));
console.log(totalProductsValue);