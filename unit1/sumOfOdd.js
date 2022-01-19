var items = [1, 2, 3, 4, 5, 6, 7, 8];

var isOdd = function (el) {
    return (el % 2 == 1);
}

var sum = function (ac, el) {
    return ac + el;
}

console.log(items.filter(isOdd).reduce(sum))