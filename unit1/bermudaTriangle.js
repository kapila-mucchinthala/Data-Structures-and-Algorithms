var n = 4;
for (var i = 1; i <= n; i++) {
    var result = "";
    for (var j = 1; j <= n - i; j++) {
        result += " ";

    }
    for (var j = 1; j <= i; j++) {
        result += "* ";
    }
    console.log(result);
}