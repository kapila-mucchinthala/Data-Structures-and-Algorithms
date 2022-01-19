function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];
  var data = newInput[1].split(" ").map(Number);

  function oddSubset() {
    var count = 0;
    for (var a = 0; a < data.length; a++){
      var sum = 0;
      for (var b = a; b < data.length; b++){
        sum += data[b];
        if (sum % 2 != 0) {
          count++;
        }

      }
    }
    return count;
  }
  console.log(oddSubset());
}
if (process.env.USER === "kishore") {
  runProgram(`3
1 2 3`);
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