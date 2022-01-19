function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].split(" ").map(Number);

    var count = 0;
    for (var a = 0; a < n; a++){
        var subArr = 0;
        for (var b = a; b < n; b++){
            subArr += data[b];
            //console.log(subArr);
            if (subArr % 2 == 0) {
                count++;
            }
        }
    }
    console.log(count);


    
}

if (process.env.USER === "kishore") {
    runProgram(`5
2 5 4 4 4`);
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
