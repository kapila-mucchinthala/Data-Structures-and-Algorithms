function fibonacci(number){
    if(number==1 || number==2){
        return 1
    }
    return fibonacci(number-1) + fibonacci(number-2);
}

function runProgram(input) {
   var number = Number(input);
   var output = fibonacci(number);
   console.log(output);
   
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