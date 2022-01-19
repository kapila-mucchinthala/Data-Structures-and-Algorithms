
function runProgram(input) {
  input = input.split("\n");
  var len = +input[0];
  var arr = input[1].split(" ").map(Number);
  var min = arr[0];
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      sum += min;
    } else {
      sum += min;
    }
  }
  console.log(sum);
}
  
if (process.env.USER === "kishore") {
  runProgram(`5
4 7 8 3 4`);
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