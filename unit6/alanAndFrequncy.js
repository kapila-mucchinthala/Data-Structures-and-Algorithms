function runProgram(input) {
  var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].trim().split("").sort();
    var obj = {};
    for (let i = 0; i < n; i++){
        if (obj[data[i]] == undefined) {
            obj[data[i]] = 1;
        }
        else {
            obj[data[i]] =obj[data[i]]+1;
        }
    }
    console.log(obj);
    let result = "";
    for (i in obj) {
        result = i + "-" + obj[i];
        console.log(result);
    }
    
}
if (process.env.USER === "kishore") {
  runProgram(`3
man`);
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