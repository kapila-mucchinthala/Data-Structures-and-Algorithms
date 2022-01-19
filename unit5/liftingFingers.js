function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i < cases; i++) {
    var data = newInput[i + 1].split("");
    
    function liftingFingers() {
      var count = 0;
      for (var j = 0; j < data.length; j++) {
        if (data[j] !== data[j + 1]) {
          // console.log(j, j + 1);
          count++;
        }
      }
      console.log(count);
      
    }
    liftingFingers();
  }
    
}
if (process.env.USER === "kishore") {
  runProgram(`2
aaaaa
abbbaaz`);
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