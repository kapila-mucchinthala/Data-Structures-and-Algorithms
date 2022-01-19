
function runProgram(input) {
    var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].trim().split(" ").map(Number);
    
        function nextGreaterElement(data) {
            var result = "";
            for (var a = 0; a < n; a++) {
                var count = 0;
                for (var b = a + 1; b < n; b++) {
                    if (data[b] > data[a] && count < 1) {
                        count++;
                        //console.log(count);
                         
                        result += data[b] + " ";
              
                        // console.log(result);
                    }
                
                }
                if (count == 0) {
                    result += -1 + " ";
                }
            }
            return result;
        }
        console.log(nextGreaterElement(data));
    }
}
if (process.env.USER === "kishore") {
  runProgram(`1
4
1 3 2 4`);
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