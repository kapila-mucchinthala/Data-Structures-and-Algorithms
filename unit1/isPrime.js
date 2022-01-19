var n = 7;
var prime = true;
for (var i = 2; i < n; i++){
    
    if (n % i == 0) {
        prime = false;
        break;
    }
}
if (prime) {
    console.log("Prime")
} else {
    console.log("Not a Prime");
}