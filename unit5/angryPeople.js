function runProgram(input) {
    var newInput = input.split("\n");
    var N = +newInput[0];
    var arr = newInput[1].split(" ").map(Number);
    
    var sortedArr = arr.sort((a, b) => {
    return b - a;
    });
    // console.log(sortedArr);
    var max = 0;
    var diff = 0;
    var diff2 = 0;
    for (var i = 0; i < sortedArr.length; i++){
        diff = arr[i] - arr[i + 1];
        diff2 = arr[i] - arr[i+2];
        // console.log(diff);
        if (diff > max) {
            max = diff;
        }
        if (diff2 > max) {
            max = diff2;
        }
    }
    console.log(max);

}
if (process.env.USER === "kishore") {
  runProgram(`4
5 10 6 8`);
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