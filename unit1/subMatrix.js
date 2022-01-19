var items = [
    [1,  2,  3],
    [5,  6,  7],
    [7,  8,  9],
];

var sub_array = [1, 1, 2, 2];
var new_array = [];

    for (var i = sub_array[1]; i <= sub_array[2]; i++) {
    var res = [];
    for (var j = sub_array[1]; j <= sub_array[2]; j++) {
        res.push(items[i][j]);
    }
    new_array.push(res);
}
    console.log(new_array);