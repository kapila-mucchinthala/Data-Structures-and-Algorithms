
var n = 4;
for (i = 1; i <= n; i++) {
    var result = "";
    for (j = 1; j <= n; j++) {
        if (j <= n - i) {
            result += "  ";
        }
        else {
            result += "* ";
        }
    }
    console.log(result);
}