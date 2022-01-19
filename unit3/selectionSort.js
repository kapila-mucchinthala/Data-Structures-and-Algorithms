function runProgram(input) {
  var newInput = input.split("\n");
  var N = +newInput[0];
  var data = newInput[1].split(" ").map(Number);
    

  for (var i = 0; i < N; i++) {
    var minimum = i;
    for (var j = i + 1; j < N; j++) {
      if (data[j] < data[minimum]) {
        minimum = j;
      }
    }
    var temp = data[i];
    data[i] = data[minimum];
    data[minimum] = temp;
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