var arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
var str1 = [];
var str2 = [];
var str3 = "";
for (var i = 0; i < arr.length; i++){
    if (arr[i] >= 0) {
        str1.push(arr[i]);
    }
    else {
        str2.push(arr[i]);
    }
}
for (let i = 0; i < arr.length; i++){
    if (i<str1.length) {
        str3 += str1[i]+" ";
    }
    if (i<str2.length) {
        str3 += str2[i]+" ";
    }
}
// console.log(str1);
// console.log(str2);
console.log(str3);