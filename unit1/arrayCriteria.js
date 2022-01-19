var items = [2, 4, 5, 3, 6, 8];

var even = function (el) {
    return el % 2 == 0;
}

var evenIndex = function (el,pos) {
    return pos%2==0;
}


var output = items.filter(even).filter(evenIndex);

//var output = items.filter(evenIndex).filter(even);

console.log(output);