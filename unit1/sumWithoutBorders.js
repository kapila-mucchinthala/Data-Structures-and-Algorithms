function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[1].split(" ").map(Number);
    var n = line[0];
    for (var i = 1; i< newInput.length; i = i + n + 1) {
        line = newInput[i].split(" ").map(Number);
        n = line[0];
        var matrix = [];
        for (var j = i + 1; j <= i + n; j++) {
            var data = newInput[j].split(" ").map(Number);
            matrix.push(data);
        }
        

        function sumWithoutBorders() {
            var result =0;
            for (var a = 0; a < matrix.length; a++) {
                for (var b = 0; b < matrix[0].length; b++) {
                    if (a == 0 || a == matrix.length - 1 || b == 0 || b == matrix[0].length - 1) {
                        continue;
                    }
                    else {
                        result += matrix[a][b];
                
                    }
                }
            }
            console.log(result);
        }
        sumWithoutBorders();
    }
}

if (process.env.USER === "kishore") {
    runProgram(`1
3 4 
1 2 4 5 6
4 5 6 2 4
7 8 9 4 1`);
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