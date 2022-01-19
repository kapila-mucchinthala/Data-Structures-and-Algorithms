function runProgram(input) {
    var data = input.split(" ");
    var name = data[0];
    var gender = data[1];

    if (gender == "M") {
        console.log("Hello Mr. "+name);
    }
    else {
         console.log("Hello Mrs. "+name);
    }


}
if (process.env.USER === "kishore") {
    runProgram(`Prateek M`);
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