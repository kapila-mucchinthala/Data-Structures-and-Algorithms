function runProgram(input) {
  var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);
    var odd = 0;
    var even = 0;
    for (var i = 0; i < n; i++){
        if (data[i] % 2 == 0) {
            even += data[i];
        }
        else {
            odd += data[i];
        }
    }
    if (odd > even) {
        console.log("Odd");
    }
    else {
        console.log("Even");
    }

}



if (process.env.USER === "kishore") {
  runProgram(`4
1 2 3 4`);
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