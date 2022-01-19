function runProgram(input) {
  var newInput = input.split("\n");
  var cases = newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
    var line = newInput[i + 1];
    var data = newInput[i + 2].split(" ").map(Number);

    function arraySumMaximum() {
      var max = 0;
      for (var a = 0; a < data.length; a++){
        var sum = 0;
        for (var b = 0; b < data.length; b++){
          if (data[b] >= data[a]) {
            sum += data[a];
          }
          else {
            sum += (data[b] * (-1));
          }
        }
        if (sum > max) {
          max = sum;
        }
      }
      console.log(max);
    }
            
    arraySumMaximum();
  }

}
if (process.env.USER === "kishore") {
  runProgram(`2
3
2 3 1
5
1 6 7 1 5`);
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

