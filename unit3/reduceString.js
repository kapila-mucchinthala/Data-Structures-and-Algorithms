function runProgram(input) {
  var data = input.split("");
  let top = -1;
  let stack = [];
  for (var i = 0; i < data.length; i++) {
    stack.push(data[i]);
    top++;
    if (data[i + 1] === stack[top]) {
      stack.pop();
      top--;
      i++;
    }
  }
  if (top == -1) {
    console.log("Empty String");
  } else {
    console.log(stack.join(""));
  }
}
     

if (process.env.USER === "kishore") {
  runProgram(`aaabccddd`);
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