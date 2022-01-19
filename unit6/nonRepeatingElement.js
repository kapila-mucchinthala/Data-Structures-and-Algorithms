var arr = [-1, 2, -1, 3, 2];
var obj = {};

for (var i = 0; i < arr.length; i++){
    if (obj[arr[i]] == undefined) {
        obj[arr[i]] = 1;
    }
    else {
        obj[arr[i]]=obj[arr[i]]+1;
    }
}
// console.log(obj);

for (i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == 1) {
        console.log(arr[i]);
        break;
    }
}