var a = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

var b = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];

var sum = 0;

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        sum = a[i][j] + b[i][j];
        console.log(sum);
    }
}