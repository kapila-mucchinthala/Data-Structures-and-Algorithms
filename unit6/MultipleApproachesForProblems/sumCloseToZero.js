var arr = [1, 2, 6, 9, -5, -2];
// var n = arr.length;
// if (n < 2) {
//     console.log("Invalid input");
// }
// var min_l = 0;
// var min_r = 1;
// var min_sum= Math.abs(arr[0]+arr[1]);
// for (var i = 0; i < n; i++){
//     var sum = 0;
//     for (var j = 0; j < n; j++){
//         sum =  Math.abs(arr[i] + arr[j]);
//         if (sum < min_sum && sum!=0) {
//             min_sum = sum;
//             min_l = i;
//             min_r = j;
//         } 
        
//     }
// }
// console.log(arr[min_l], arr[min_r]);

// //////////////////////////////////////////////////////////////////////////

var data = [-5,-2, 1, 2, 6, 9];
var n = data.length;
var l = 0;
var r = n - 1;
var min_l = 0;
var min_r = n-1;
var min_sum = Math.abs(data[min_l] + data[min_r]);

while (l < r) {
    var sum = data[l]+data[r];
    if (Math.abs(sum) < min_sum) {
        min_sum = sum;
        min_l = l;
        min_r = r;
    }
    if (sum > 0) {
        r--;
    }
    else{
        l++;
    }
}
console.log(data[min_l],data[min_r]);