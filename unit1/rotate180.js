function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[1]);
    for (var i = 1; i< newInput.length; i = i + n + 1) {
        n = Number(newInput[i]);
        var matrix = [];
        for (var j = i + 1; j <= i + n; j++) {
            var data = newInput[j].split(" ").map(Number);
            matrix.push(data);
        }
        

        function clockWiseRotation() {
            for (var a = matrix.length-1; a >=0; a--) {
                var output = "";
                for (var b = matrix.length - 1; b >= 0; b--) {
                    output += matrix[a][b] + " ";
                }
                console.log(output);
            }
        }
        clockWiseRotation()
    }
}

if (process.env.USER === "kishore") {
    runProgram(`2
3 
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6`);
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