var arr = [1, 1, 0, 1, 0, 0, 0, 1];
// arr = arr.sort((a, b) => {
//     return a - b;
// })
// console.log(arr.join(" "));


///////////////////////////////////////////////////////////


var l = 0;
var r = arr.length - 1;
var temp = 0;
while (l < r) {
    if (arr[l] == 0) {
        l++;
    }
    if (arr[r] == 1) {
        r--;
    }
    if (arr[l] == 1 && arr[r] == 0) {
        temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
console.log(arr);

///////////////////////////////////////////////////////////

// var zero = "";
// var one = "";
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//         zero += arr[i] + " ";
//     }
//     else {
//         one += arr[i] + " ";
//     }
// }
// var result = zero + one;
// console.log(result);