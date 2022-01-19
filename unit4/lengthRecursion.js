var str = 'masai';

// function length(i) {
//     if (i === str.length-1) {
//         return 1;
//     } else {
//         return 1 + length(i + 1);
//     }
// }
var count=0;
function length(i) {   
    // var count = 0;
    if (i >= str.length) {
        return 0;
    } else {
        count++;
        return count + length(i + 1);
    }
}

console.log(length(0,0));