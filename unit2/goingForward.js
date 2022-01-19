function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var n = line[0];
    var k = line[1];
    var data = newInput[1].split(" ").map(Number);
     
    var count = 0
    
    for (var a = 0; a < n; a++){
        if (data[a] >= data[k]) {
           // console.log(data[a]);
            count++;
        }
    }
    console.log(count);
    
}

if (process.env.USER === "kishore") {
    runProgram(`17 14
16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0
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


