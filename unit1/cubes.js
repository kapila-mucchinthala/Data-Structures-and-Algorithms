var items = [1, 2, 3, 4, 5, 6, 7, 8];

var sum = function (ac, el) {
    return ac + el;
}

var cube = function (el) {
    return (el ** 3);
}

var div3 = function (el) {
    return (el % 3 == 0);
}

console.log(items.filter(div3).map(cube).reduce(sum))