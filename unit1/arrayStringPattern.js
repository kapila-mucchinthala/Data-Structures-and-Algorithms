var items = ["apple", "windows", "ubuntu", "cola", "system"];

var character = function (el) {
   return (el.charAt(0))=='a' || (el.charAt(el.length-1)=='a')
}

var pattern = items.filter(character);

console.log(pattern);