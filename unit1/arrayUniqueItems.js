var items = ['a', 'b', 'c', 'd', 'a', 'c'];
var res = "";
var b = [];
for (var i = 0; i < items.length; i++) {
    for (var j = i + 1; j < items.length; j++) {
        if (items[i] == items[j]) {
          b.push(res = items[j]);
        }
    }
}    
console.log(b);