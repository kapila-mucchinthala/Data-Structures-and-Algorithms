function runProgram(input) {
      var n = input;


            for (var i = 1; i <= n; i++) {
                  var result = "";
                  for (var j = 1; j <= n; j++) {
                        if (j == i) {
                              result += "\\";
                        }
                        else {
                              result += "-";
                        }
                  }
                  for (j = 1; j <= n; j++) {
                        if (j <= n - i) {
                              result += "-";
                        }
                  }
                  result += "/";
                  for (var j = 1; j <= n; j++) {
                        if (j == i) {
                              result += "\\";
                        }
                        else {
                              result += "-";
                        }
                  }
                  for (j = 1; j <= n; j++) {
                        if (j <= n - i) {
                              result += "-";
                        }
                  }
                  result += "/";
                  console.log(result);

            }
      
}

 
if (process.env.USER === "kishore") {
    runProgram(`4`);
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
