var items = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9],
];

var sum = 0;

for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items[i].length; j++) {
        sum += items[i][j];

    }
}
console.log(sum);