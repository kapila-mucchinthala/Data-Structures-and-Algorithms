function factorial(N){
    if(N===0){
      return 1;
    }
    return N * factorial(N-1);
}
 
function runProgram(input) {
     var N = Number(input);
     var output = factorial(N);
     console.log(output);
     
}

if (process.env.USER === "kishore") {
    runProgram(`5`);
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

// var N = 5;
// function factorial(i) {
//   if(i===N){
//       return N;
//     }
//     return i * factorial(i+1);
// }

// console.log(factorial(1));