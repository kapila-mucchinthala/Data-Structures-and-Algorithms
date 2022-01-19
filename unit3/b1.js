function runProgram(input) {
  var data = input.split("");
  if (isBalanced(data)) {
    console.log("balanced");
  }
  else {
    console.log("unbalanced");
  }
    
}

function isBalanced(data) {
  var stack = [];
  for (var i = 0; i < data.length; i++) {
    var temp = data[i];
    if (temp == "(" || temp == "[" || temp == "{") {
      stack.push(temp);
      continue;
    }
    if (stack.length == 0)
      return false
    var compare;
    switch (temp) {
      case ")":
        compare = stack.pop();
        if (compare == "{" || compare == "[")
          return false
        break;
      case "}":
        compare = stack.pop();
        if (compare == "(" || compare == "[")
          return false
        break;
       case "]":
        compare = stack.pop();
        if (compare == "(" || compare == "{")
          return false
        break;
    }
  }
  return stack.length == 0;
}


if (process.env.USER === "kishore") {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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