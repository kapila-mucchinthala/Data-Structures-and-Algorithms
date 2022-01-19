var arr = [12, 34, 45, 9, 8, 90, 3];
var even = "";
var odd = "";
for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        even += arr[i]+' ';
    }
    else {
        odd += arr[i]+' ';
    }
}
var result = even + odd;
console.log(result);