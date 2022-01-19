var n = 6;
for (i = 1; i <= n; i++) {
    var result = "";
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n) {
            result += "* ";
        }
        else {
            result += "  ";
        }
    }
    console.log(result);
}