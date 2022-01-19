var n = 7;
for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n - 1; j++) {
        result += "  ";
    }
         result += "*";
        console.log(result);
}  
var result = "";
for (var i = 1; i <= n; i++) {
    result += "* ";
}
console.log(result);