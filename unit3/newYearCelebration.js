function runProgram(input) {
  var newInput = input.trim().split("\n");
  var cases = +newInput[0];
  var stack = [];
  var queue = [];

  for (var i = 1; i <= cases; i++) {
    var data = newInput[i].split(" ").map(Number);

    if (data[0] === 1) {
      queue.push(data[1]);
    } else if (data[0] == 2) {
      stack.push(data[1]);
    } else if (data[0] == 3) {
      if (queue.length == 0) {
        console.log(-1);
      } else {
        console.log(queue[0]);
      }
    } else if (data[0] == 4) {
      if (stack.length == 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length - 1]);
      }
    } else {
      stack.push(queue[0]);
      queue.shift();
    }
  }
}
if (process.env.USER === "kishore") {
  runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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