// const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(myFunction);

// function myFunction(total, value, index, numbers) {
//     return total + value;
// }
// console.log(sum);


const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((firstvalue, lastvalue) =>{
    return firstvalue + lastvalue;
});
console.log(sum);