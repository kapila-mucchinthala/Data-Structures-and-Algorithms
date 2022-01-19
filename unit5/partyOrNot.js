function runProgram(input) {
    var newInput = input.trim().split("\n");
    var line = newInput[0].split(" ").map(Number);
    var friends = newInput[1].split(" ").map(Number);
    var N = line[0];
    var C = line[1];
    var R = line[2];

    var data = friends.sort((a, b) => {
    return a - b;
    });
    // console.log(data);
    function party() {
        var sum = 0;
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i]
            if (sum <= R) {
                count++;
                if (count == C) {
                    return "Party";
                }
            }
        
        }
        return "Sad";
    }
    console.log(party());
    
}


if (process.env.USER === "kishore") {
  runProgram(`5 3 24
6 4 21 20 13`);
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