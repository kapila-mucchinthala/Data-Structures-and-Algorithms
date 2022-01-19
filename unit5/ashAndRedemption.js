
function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 3 * cases - 3; i = i + 3){
    var n = +newInput[i + 1];
    var Ash = newInput[i + 2].split(" ").map(Number);
    var Gary = newInput[i + 3].split(" ").map(Number);

    function redemption() {
      var result = '';
      for (var a = 0; a < Ash.length; a++) {
        if (Ash[a] <= Gary[a]) {
           return "Train Hard Again"
        }
      }
      return "Ash Finally Wins";
    }
    console.log(redemption());
  }
  
}
if (process.env.USER === "kishore") {
  runProgram(`2
3
12 3 4
5 4 1
2
1 5
1 4`);
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