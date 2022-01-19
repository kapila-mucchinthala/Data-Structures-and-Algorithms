var roman = {
    I: 1,
    V: 5,
    X: 10
}
var arr = [['I', 1], ['V', 5], ['X', 10]];

// I II III IV V VI VII VIII IX X
// XI XII XIII XIV XV XVI XVII XVIII XIX XX

var num = 'IIV';

var arr2 = [];
for (var i = 0; i < num.length; i++){
    for (var j = 0; j < arr.length; j++){
        if (num[i] == arr[j][0]) {
            arr2.push(arr[j][1]);
            // console.log(arr[j][1]);
        }
    }    
}
console.log(arr2);
var res = 0;
for (var i = 0; i < arr2.length; i++){
    if (arr2[i] < arr2[i + 1]) {
        res -= arr2[i];
    }
    else if (arr2[i] >= arr2[i + 1]) {
        res += arr2[i];
        // console.log(res);
    }
    else {
        res += arr2[i];
    }
}
console.log(res);
