var arr = [-7, 1, 5, 2, -4, 3, 0];
// var arr = [1, 2, 3];
var n = arr.length;
// function equilibtrium() {
//     for (let i = 1; i < n-1; i++){
//         var left = 0;
//         for (let j = 0; j < i; j++){
//             left += arr[j];
//         }
//         var right = 0;
//         for (let k = i + 1; k < n; k++){
//             right+= arr[k];
//         }
//         if (left == right) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(equilibtrium());

// /////////////////////////////////////////////////////////////////


function equilibtrium() {
    var left = [];
    var leftSum = 0;
    for (let i = 0; i < n; i++){
        leftSum += arr[i];
        left.push(leftSum);
    }
    var right = [];
    var rightSum = 0;
    for (var i = n-1; i>=0; i--){
        rightSum += arr[i];
        right[i] = rightSum;
    }
    for (var i = 0; i < left.length; i++){
        if (left[i] == right[i]) {
            return i;
        }
    }
    return -1;
}
console.log(equilibtrium());