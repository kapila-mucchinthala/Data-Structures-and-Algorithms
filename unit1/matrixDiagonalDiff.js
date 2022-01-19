var data = [
    [1, 2, 3, 4],
    [5, 6, 7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];
var a = 0;
var b = 0;

for (var i = 0; i < data.length; i++) {
    a += data[i][i];
    b += data[i][data.length - 1 - i];
}

console.log(a-b);