function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var rows = newInput.slice(1, rc[0] + 1);
    var data = rows.map(function (row) {
        return row.split(" ").map(Number);
    })

    function traverse() {
        var result = "";
        for (var i = data[0].length-1; i>=0; i--) {
            for (var j = 0; j <data.length; j++) {
                result += data[j][i] + " ";
            }
        }
        return result;
    }
    console.log(traverse());

}

if (process.env.USER === "kishore") {
    runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
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