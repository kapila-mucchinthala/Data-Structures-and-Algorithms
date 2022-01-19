function runProgram(input) {
    var newInput = input.split("\n");
    var cases = +newInput[0];
    
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2];
        
        function substring() {
            for (var a = 0; a < n; a++){
                var result = "";
                for (var b = a; b < n; b++){
                    result += data[b];
                    console.log(result);
                }
            }
        }
        substring();
    }
    

}
if (process.env.USER === "kishore") {
    runProgram(`2
1
f
2
vs`);
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