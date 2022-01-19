function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2){
    var n = +newInput[i + 1];
    var data = newInput[i + 2].split(" ").map(Number);

    function allTwiceExceptOne() {
      var count = {};
      for (var a = 0; a < n; a++){
        if (count[data[a]] == undefined) {
          count[data[a]] = 1;
        }
        else {
          var prev = count[data[a]];
          count[data[a]] = prev + 1;
        }
      }
      var res = "";
      for (a in count) {
        if (count[a] == 1) {
          return a;
        }
      }
     }
    console.log(allTwiceExceptOne());
  }

}
if (process.env.USER === "kishore") {
  runProgram(`2
1
5
5
1 2 1 3 2`);
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