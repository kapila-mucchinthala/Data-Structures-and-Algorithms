function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[1]);
    for (var i = 1; i< newInput.length; i = i + n + 1) {
        n = Number(newInput[i]);
        var matrix = [];
        for (var j = i + 1; j <= i + n; j++) {
            var data = newInput[j].split(" ");
            matrix.push(data);
        }
        
        function checkForSymmetry() {
            if (horizontalSymmetry() == "true" && verticalSymmetry() == "true") {
                console.log("BOTH");
            }
             else if(horizontalSymmetry() == "false" && verticalSymmetry() == "false") {
                console.log("No");
            }
             else if(horizontalSymmetry() == "true" && verticalSymmetry() == "false") {
                console.log("HORIZONTAL");
            }
             else if(horizontalSymmetry() == "false" && verticalSymmetry() == "true") {
                console.log("VERTICAL");
            }
            
        }
        checkForSymmetry()
        function horizontalSymmetry() {
            for (var a = 0; a < Math.floor(matrix.length/2); a++){
                for (var b = 0; b < matrix.length; b++){
                    if (matrix[a][b] != matrix[matrix.length - 1 - a][b]) {
                         return "false"
                    }
                }
            }
            return "true"
            
        }
        // console.log(horizontalSymmetry());

         function verticalSymmetry() {
             for (var x = 0; x < matrix.length; x++){
                for (var y = 0; y < matrix.length; y++){
                    if (matrix[y][x] != matrix[y][matrix.length - 1 - x]) {  
                        return "false"
        
                    }
                }
                
            }
            return "true"
        }
       // console.log(verticalSymmetry());


    }
}

if (process.env.USER === "kishore") {
    runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
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