function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];
  var data = newInput[1].trim().split(" ").map(Number);

function smallNeighbourElement(data) {
  var res = "";
  var stack = [];
  for (var i = 0; i < data.length; i++) {
    var x = data[i];
    while (stack[stack.length - 1] >= data[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      stack.push(x);
      res = res + "-1" + " ";
    } else {
      res = res + stack[stack.length - 1] + " ";
      stack.push(x);
    }
  }
  return res;
}
  console.log(smallNeighbourElement(data));
}
if (process.env.USER === "kishore") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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