function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2){
    var line1 = newInput[i + 1].split(" ").map(Number);
    var data = newInput[i + 2].split(" ").map(Number);
    var n = line1[0];
    var q = line1[1];

      function ShinchanLoveForCities() {
      var res = 0;
      if (n == 1) {
        return 0;
      }
      else if (n > 1) {
        for (var a = 0; a < n; a++) {
          res = Math.abs(res) - data[a];
          // console.log(res);
        }
        return res * q
      }
    }
    console.log(ShinchanLoveForCities());    
  }

}

if (process.env.USER === "kishore") {
  runProgram(`2
4 4
2 3 10 1
1 5
3`);
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