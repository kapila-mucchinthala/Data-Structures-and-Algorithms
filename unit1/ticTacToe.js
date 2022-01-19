function runProgram(input) {
    var newInput = input.split("\n");
    var matrix = [];
    for (var i = 0; i < newInput.length; i++) {
        var data = newInput[i].split(" ");
        matrix.push(data);
    }
    var n = matrix.length;

    function result() {
        if (checkRows("o") == "True" || checkColoumns("o") == "True" || leftDiagonal("o") == "True" || rightDiagonal("o") == "True") {
            console.log("o");
        }
        else if (checkRows("x") == "True" || checkColoumns("x") == "True" || leftDiagonal("x") == "True" || rightDiagonal("x") == "True") {
            console.log("x");
        }
        else {
            console.log("Tie");
        }
    }
    result()

    function checkRows(z) {
        for (var a = 0; a < n; a++) {
            var count = 0;
            for (var b = 0; b < n; b++) {
                if (matrix[a][b] == z) {
                    count++;
                }
            }
            if (count == 3) {
                return "True"
            }
        }
        return "False"
    }
    function checkColoumns(z) {
        for (var a = 0; a < n; a++) {
            var count = 0;
            for (var b = 0; b < n; b++) {
                if (matrix[b][a] == z) {
                    count++;
                }
            }
            if (count == 3) {
                return "True"
            }
        }
        return "False"
    }
    function leftDiagonal(z) {
        var count = 0;
        for (var a = 0; a < n; a++) {
            for (var b = 0; b < n; b++) {
                if (a == b) {
                    if (matrix[a][b] == z) {
                        count++;
                    }
                }
            }
        }
        if (count == 3) {
           return "True"
        }
           return "False"
    } 
    function rightDiagonal(z) {
         var count = 0;
        for (var a = 0; a < n; a++) {
            if (matrix[a][n-1-a] == z) {
                count++;
            }
        }
        if (count == 3) {
                return "True"
        }
        return "False"
    }  
}

if (process.env.USER === "kishore") {
    runProgram(`x o x
o x o
x x o`);
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