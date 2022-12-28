const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter(function(value){
    return value > 2 && value < 5;
});
console.log(filtered);