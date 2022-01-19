function runProgram(input) {
  var newInput = input.split("\n");
  var cases = +newInput[0];
  for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
    var line = newInput[i + 1].split(" ").map(Number);
    var data = newInput[i + 2].split(" ").map(Number);
    var n = line[0];
    var k = line[1];

    function candidates() {
      var sorted = data.sort((a, b) => {
        return b - a;
      })
      var arr = [1];
      var rank = 1;
      for (var a = 0; a < sorted.length-1; a++) {
        if (sorted[a] == sorted[a + 1]) {
          arr.push(rank);
        }
        else {
          
          arr.push(arr.length+1);
          rank = arr.length+1;
        }
      }
      var count = 0;
      for (var c = 0; c < arr.length; c++){
        if (arr[c] <= k) {
          count++;
        }
      }
      console.log(arr);
    }
    candidates();
  }
}
if (process.env.USER === "kishore") {
  runProgram(`1
5 3
2 2 2 2 1`);
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