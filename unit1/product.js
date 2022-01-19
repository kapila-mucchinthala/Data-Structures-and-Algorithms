var items = [1, 2, 3, 4, 5, 6, 7, 8];

var product = function (ac, el) {
    return ac * el;
}

console.log(items.reduce(product));