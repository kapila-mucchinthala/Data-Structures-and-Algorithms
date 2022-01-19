function runProgram(input) {
  var newInput = input.split("\n");
  var N = +newInput[0];
  var line = newInput[1].split(" ").map(Number);
  var l = line[0];
  var r = line[1];

  var count = 0;
  for (var i = 0; i < N; i=i+2) {
    
      if (i + (i + 1) % 2 !== 0) {
        count += 2;
      }

  }
  console.log(count);
}

if (process.env.USER === "kishore") {
    runProgram(`3
0 1`);
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
