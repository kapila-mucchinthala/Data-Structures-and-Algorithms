function profit(number){
    if(number<0){
        return 0;
    }
    if (number == 0) {
        return 1;
    }
    return profit(number-4) + profit(number-8);
}

function runProgram(input) {
    var newInput = input.split('\n');
    var cases = +newInput[0];
    for (var i = 0; i < cases; i++){
        var number = +newInput[i + 1];
        var output = profit(number);
        console.log(output);
    }
}


if (process.env.USER === "kishore") {
    runProgram(`1
12`);
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