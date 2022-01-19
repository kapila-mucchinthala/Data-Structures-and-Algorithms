// var arr = [12, 3, 4, 6, 9, 1];

// function tripletSum(arr,x) {
//     for (var i = 0; i <= (arr.length - 3); i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             var sum = 0;
//             for (var k = j + 1; k < arr.length; k++) {
//                 if ((arr[i] + arr[j] + arr[k]) == x) {
//                     return arr[i] +" "+ arr[j] +" "+ arr[k];
//                 }
//             }
//         }
//     }
// }
// console.log(tripletSum(arr,9)); 

// ///////////////////////////////////////////////////////////////////

var arr = [12, 3, 4, 6, 9, 1];
arr = arr.sort((a, b) => {
        return a-b;
})

function tripletSum(arr, x) {
    for (var i = 0; i <= (arr.length - 3); i++) {
        let l = i+1;
        let r=arr.length - 1;
        while (l < r) {
            if ((arr[i] + arr[l] + arr[r]) == x) {
               return (arr[i] + " " + arr[l] + " " + arr[r])
            }
            else if ((arr[i] + arr[l] + arr[r]) > x) {
                r--;
            }
            else {
                l++;
            }
        }
    }
}
console.log(tripletSum(arr,24)); 