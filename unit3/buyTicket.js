function runProgram(input) {
  var newInput = input.trim().split("\n");
  var cases = newInput[0];
  var queue = [];
  for (var i = 1; i <= cases; i++) {
    var data = newInput[i].split(" ");
    if (data[0] == "E") {
      queue.push(data[1]);
      console.log(queue.length);
    } else {
      if (queue.length == 0) {
        console.log(`-1 0`);
      } else {
        var a = queue[0];
        queue.shift();
        var b = queue.length;
        console.log(`${a} ${b}`);
      }
    }
  }
}
if (process.env.USER === "kishore") {
  runProgram(`5
E 2
D
D
E 3
D`);
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