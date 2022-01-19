function runProgram(input) {
    var newInput = input.split("\n").map(Number);
    var cases = newInput[0];
    for (var i = 1; i <= cases; i++) {
        var number = newInput[i];
       
        function power() {
            for (var j = 0; j<=100; j++) {
                if (2 ** j == number) {
                    return "YES";
                }
            
            }
            return "NO"
        }
        console.log(power());

    }

}

if (process.env.USER === "kishore") {
    runProgram(`3
1
2
100`);
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