function runProgram(input) {
  var newInput = input.split("\n");
  var arr = [];
  var top = -1;
  for (var i = 1; i < newInput.length; i++) {
    if (newInput[i][0] == "1") {
        if (top == -1) {
            console.log("No Food");
        }
        else {
            console.log(arr[top]);
            arr.pop();
            top--;
        }
    } else if (newInput[i][0] == "2") {
      var [a, b] = newInput[i].split(" ").map(Number);
      arr.push(b);
    top++;
    } 
  }
}


if (process.env.USER === "kishore") {
  runProgram(`6
1
2 5
2 7
2 9
1
1`);
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