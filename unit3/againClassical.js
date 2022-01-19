function isBalanced(data) {
  var stack = [];
  for (i = 0; i < data.length; i++) {
    var temp = data[i];
    if (temp == "(" || temp == "[" || temp == "{") {
      stack.push(temp);
      continue;
    }
    if (stack.length == 0) return false;

    var compare;
    switch (temp) {
      case ")":
        compare = stack.pop();
        if (compare == "{" || compare == "[") return false;
        break;

      case "}":
        compare = stack.pop();
        if (compare == "(" || compare == "[") return false;
        break;

      case "]":
        compare = stack.pop();
        if (compare == "(" || compare == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var cases = newInput[0];
  for (k = 1; k <= cases; k++) {
    var data = newInput[k].split("");
    if (isBalanced(data)) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}

if (process.env.USER === "kishore") {
  runProgram(`3
{([])}
()
([]
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