var items = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9],
];


for (var i = 0; i < items.length; i++) {
    var sum = 0;

    for (var j = 0; j < items.length; j++) {
        sum += items[j][i];

    }
    console.log(sum);
}
