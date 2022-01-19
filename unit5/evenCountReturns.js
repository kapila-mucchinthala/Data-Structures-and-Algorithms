function runProgram(input) {
    var data = input.split("").map(Number);
    
    var result = "";
    for (var i = 0; i < data.length; i++){
        var count = 0;
        for (var j = i; j < data.length; j++){
            if (data[j] % 2 == 0) {
                count++;
            }
            
        }
        result += count + " ";
    }
    console.log(result);
    
}
if (process.env.USER === "kishore") {
  runProgram(`574674546476`);
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