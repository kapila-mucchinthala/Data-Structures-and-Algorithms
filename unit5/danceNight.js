function runProgram(input) {
    var newInput = input.trim().split("\n");
    var cases = +newInput[0];
    for (var i = 0; i < 3 * cases - 2; i = i + 3) {
        var line = newInput[i + 1].split(" ").map(Number);
        var boys = newInput[i + 2].split(" ").map(Number);
        var girls = newInput[i + 3].split(" ").map(Number);
        var M = line[0];
        var N = line[1];
    
        var bdata = boys.sort((a, b) => {
            return a - b;
        });
        var gdata = girls.sort((a, b) => {
            return a - b;
        });
        // console.log(boys);

        function danceNight() {
            for (var a = 0; a < bdata.length; a++){
                if (bdata[a] < gdata[a]) {
                    return "No";
                }
                
            }
            return "Yes";
        
        }
        console.log(danceNight());
    }
}


if (process.env.USER === "kishore") {
  runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);
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