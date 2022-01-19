function runProgram(input) {
    var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var line = +newInput[i + 1];
        var data = newInput[i + 2];
        
        function palindrome() {
            var temp = true;
            for (a = 0; a < data.length; a++) {
                if (data[a] != data[data.length - 1 - a]) {
                    return "Impossible";
                }
            }
            if (temp == true) {
                return "Possible";
            }
        }
        console.log(palindrome());
    }
}
if (process.env.USER === "kishore") {
    runProgram(`2
6
aabbcc
5
aabcd`);
} else {
        process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
        read += input;
  });
  process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}