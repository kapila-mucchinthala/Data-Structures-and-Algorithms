function runProgram(input) {
    var data = input.split("");
    
    function Uniqueness() {
        for (var i = 0; i < data.length; i++) {
            for (var j = i+1; j < data.length; j++){
                if (data[i] == data[j]) {
                    return "No"
                }
            }
        }

        return "Unique";
    }
    console.log(Uniqueness());
  
}
if (process.env.USER === "kishore") {
  runProgram(`masis`);
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