function runProgram(input) {
    var newInput = input.split("\n");
    var cases=+newInput[0];
    for (var i = 0; i < cases; i++) {
        var num = +newInput[i+1];

        function skewness() {
            var odd = 0;
            var even = 0;
            for (var a = 1; a <= num; a++) {
                if (a % 2 != 0 && num % a == 0) {
                    odd++;
                }
                if (a % 2 == 0 && num % a == 0) {
                    even++;
                }
            }
            if (odd > even) {
                return "Odd Skewed";
            }
            else if(odd < even) {
                return "Even Skewed";
            }
            else{
                return "Not Skewed";
            }
        }
        console.log(skewness());
    }

}



if (process.env.USER === "kishore") {
  runProgram(`3
4
6
11
`);
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