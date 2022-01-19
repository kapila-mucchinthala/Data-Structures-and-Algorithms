function runProgram(input) {
    var data = input;
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
   var result = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < alphabets.length; j++) {
            if (data[i] == alphabets[j]) {
                result += j + 1;
            }
        }
    }
    console.log(result);
}

if (process.env.USER === "kishore") {
    runProgram(`cba`);
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