function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data1 = newInput[1].split(" ").map(Number);
    var data2 = newInput[2].split(" ").map(Number);

    for (var i = 0; i < n; i++) {
        if (data1[i] <= 15 && data2[i] <= 7) {
            console.log("Boarding");
        }
        else {
            console.log("Stop");
        }
        
    }


}
if (process.env.USER === "kishore") {
    runProgram(`4
12 14 15 6
8 5 7 4`);
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