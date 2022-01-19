var data = [3, 5, 6, 1, 8];

function sum(i) {
    if (i === data.length - 1) {
        return 0;
    }
    else {
        return Math.abs(data[i] - data[i + 1]) + sum(i + 1);
    }
}

console.log(sum(0));



// var arr = [1, 2, 3, 4];

// function sum(array,i) {
//     if (i >= arr.length) {
//         return 0;
//     }
//     var temp = array[i];
//     return temp + sum(arr, i + 1);
// }
// sum(arr, 0);
// console.log(sum(arr, 0));