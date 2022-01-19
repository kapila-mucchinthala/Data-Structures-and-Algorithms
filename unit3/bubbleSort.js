 function runProgram(input) {
  var newInput = input.split("\n");
  var N = +newInput[0];
  var data = newInput[1].split(" ").map(Number);
     

         for (var i = 0; i < N; i++) {
             for (var j = 0; j < N - i - 1; j++) {
                 if (data[j] > data[j + 1]) {
                     var temp = data[j];
                     data[j] = data[j + 1];
                     data[j + 1] = temp;
                 }
             }
         }

     console.log(data.join(" "));
     
}
if (process.env.USER === "kishore") {
  runProgram(`5
3 5 0 9 8`);
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