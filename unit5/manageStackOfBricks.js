function runProgram(input) {
  input = input.trim().split("\n");
  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var N = +input[line++];
    var X = +input[line++]; 
    var Y = +input[line++]; 
    var givenStack = [];
    var targetStack = [];
    for (let j = 0; j < N; j++) {
      var [a, b] = input[line++].trim().split(" ").map(Number);
      givenStack.push(a);
      targetStack.push(b);
    }
    givenStack.sort((a, b) => a - b);
    targetStack.sort((a, b) => a - b);
    var result = 0;
    for (let j = 0; j < givenStack.length; j++) {
      var diff = givenStack[j] - targetStack[j];
      if (diff <= 0) {
        result += Math.abs(diff) * X;
      } else {
        result += diff * Y;
      }
    }
    console.log(result);
  }
}

if (process.env.USER === "kishore") {
  runProgram(`1
3
6
4
3 1
1 2
1 2`);
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