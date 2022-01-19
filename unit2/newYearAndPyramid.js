function runProgram(input) {
    var data = +input;
    
    var count = 0;
    var sum = 0;
    for (var a = 1; a <= data; a++){
        for (var b = 1; b <= a; b++){
             sum += b;
       
        }
        
        if (sum > data) {
            console.log(count);
            break;
        }
        else if(sum <= data) {
            count++;
        }
    }
    
}

if (process.env.USER === "kishore") {
    runProgram(`25`);
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


