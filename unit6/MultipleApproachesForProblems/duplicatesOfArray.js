var arr = [1, 2, 3, 6, 3, 6, 1];
// var result = "";
// for (var i = 0; i < arr.length; i++){
//     var count = 0;
//     var temp = 0;
//     for (var j = i+1; j < arr.length; j++){
//         if (arr[i] == 0) {
//             continue;
//         }
//         if (arr[i] == arr[j]) {
//             temp = arr[i];
//             arr[j] = 0;
//             console.log(arr);
//             count++;
//         }
//     }
//     if (count > 0) {
//         result += temp + " ";
//     }
// }
// console.log(result);

// //////////////////////////////////////////////////////

var obj = {};
for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
        obj[arr[i]] = 1;
    }
    else {
        obj[arr[i]] = obj[arr[i]]+1;
    }
}
var result = "";
for (key in obj) {
    if (obj[key]>1) {
        result += key + " ";
    }
}
console.log(result);