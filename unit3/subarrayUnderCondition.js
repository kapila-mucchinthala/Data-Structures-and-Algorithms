function runProgram(input) {
    var data = input.split(" ").map(Number);
    
    for (var a = 0; a < data.length; a++){
        var sum = 0;
        for (var b = a; b < data.length; b++){
            sum += data[b];
            if (sum == 0) {
                console.log(a + " " + b);
            }
        }
    }
    

}

if (process.env.USER === "kishore") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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