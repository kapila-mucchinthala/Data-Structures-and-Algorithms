function runProgram(input) {
    var number = +input;
    var hours = Math.floor(number / 60);
    var minutes = number % 60;

    if (hours == 1) {
        console.log(hours+"hr"+" "+ minutes+"mins");
    }
    else if (minutes == 0) {
         console.log(hours+"hr"+" "+ "00mins");
    }
    else {
        console.log(hours+"hrs"+" "+ minutes+"mins");
    }
    

}

if (process.env.USER === "kishore") {
    runProgram(`135`);
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


