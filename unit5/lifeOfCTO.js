function runProgram(input) {
  var newInput = input.split("\n");
  var n = +newInput[0];
  var data = newInput[1].split(" ").map(Number);

  function lifeOfACTO() {
    for (var i = 0; i < n; i++) {
      if (data[i] === 1) {
        return i;
      }
    }
    return "-1";
  }
  console.log(lifeOfACTO());
    
  

}
if (process.env.USER === "kishore") {
  runProgram(`5
0 0 0 0 0 `);
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