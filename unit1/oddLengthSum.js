
var items = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var isOdd = function (el) {
    return el.length % 2 == 1;
}

var length = function (el) {
    return el.length;
}

var sum = function (ac,el) {
    return ac+ el ;
}

var total = items.filter(isOdd).map(length).reduce(sum);

   console.log(total);
  