var arr = [3, 3, 4, 2, 3,3, 2, 3, 4];

// var max = 0;
// var maxEle = 0;

// for (let i = 0; i < arr.length; i++){
//     var count = 0;
//     for (let j = 0; j < arr.length; j++){
//         if (arr[i] == arr[j]) {
//             count++;
//         }
//     }
//     if (count > max) {
//         max = count;
//         maxEle = arr[i];
//         // console.log(max);
//         // console.log(maxEle);
//     }
// }
// console.log(maxEle);


// /////////////////////////////////////////////////////////


// var n = arr.length;
// arr = arr.sort((a, b) => {
//     return a-b;
// })
// var greater = Math.floor((n / 2) + 1);
// var index = 0;
// for (let i = 0; i < greater; i++) {
//     if (arr[i] ==arr[i+greater]) {
//         index = i;
//         break;
//     }
// }
// if (index == 0) {
//     console.log("No Element Found");
// }
// else {
//     console.log(arr[index]);
// }

// /////////////////////////////////////////////////////////


var obj = {};
for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
        obj[arr[i]] = 1;
    }
    else {
        obj[arr[i]] = obj[arr[i]]+1;
    }
}
var n = arr.length;
var greater = Math.floor((n / 2) + 1);
var temp = false;
for (key in obj) {
    if (obj[key] == greater) {
        temp = true;
        console.log(key);
        break;
    }
}
if (temp == false) {
    console.log("No Element Found");
}

