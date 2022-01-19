function runProgram(input) {
    var newInput = input.split("\n");
    var nameOfDay = newInput[0];
    var number = Number(newInput[1]);
    var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var index = 0;
    var findIndex = 0;
    var res = "";
    for (var i = 0; i < week.length; i++) {
        if (week[i] == nameOfDay) {
            index = i;
        }
    }
    findIndex += index + (number % week.length);
    for (i = 0; i < 100; i++) {
        if (findIndex < week.length) {
            res += week[findIndex];
            console.log(res);
            break;
        }
        if (findIndex >= week.length) {
            findIndex = findIndex % week.length;
        }
    }
}

if (process.env.USER === "kishore") {
    runProgram(`Friday
150`);
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