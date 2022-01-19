var arr = [10, 3, 5, 6, 2];
// var result = [];
// for (var i = 0; i < arr.length; i++){
//     var product = 1;
//     for (var j = 0; j < arr.length; j++){
//         if (arr[i] == arr[j]) {
//             product *= 1;
//         }
//         else {
//             product *= arr[j];
//         }
//     }
//     result.push(product);
// }
// console.log(result);

// ///////////////////////////////////////////////////////////////////

// var left = [];
// for (var i = 0; i < arr.length; i++){
//     if (i == 0) {
//         left.push(1);
//     }
//     else {
//         left.push(arr[i - 1] * left[i - 1]);
//     }
// }
// var right = [];
// for (var i = arr.length-1; i >=0; i--){
//     if (i == arr.length - 1) {
//         right[i] = 1;
//     }
//     else {
//         right[i] = arr[i+1]*right[i+1];
//     }
// }
// var result = [];
// for (var i = 0; i < right.length; i++){
//     result.push(left[i] * right[i]);
// }
// console.log(result);

// ///////////////////////////////////////////////////////////////////

var product=[];
var temp = 1;
for (var i = 0; i < arr.length; i++){
    product[i] = temp;
    temp *= arr[i];
}
temp = 1;
for (var i = arr.length - 1; i >= 0; i--){
    product[i] *= temp;
    temp *= arr[i];
}
console.log(product);

