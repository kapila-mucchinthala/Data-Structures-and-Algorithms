function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i=i+2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);
        
        function signalsCapacity() {
            var result = "";
            var x = 2;
            var count = 0;
            for (var a = 0; a < n; a++){
                if (a == 0) {
                    result += 1 + " ";
                }
                if (data[a] <= data[a - 1]) {
                    result += 1 + " ";
                }
                else if (data[a] > data[a - 1]) {
                    count++;
                    result += x * count + " ";
                }
                
            }
            return result;
        }

        console.log(signalsCapacity());
    }

}

if (process.env.USER === "kishore") {
    runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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