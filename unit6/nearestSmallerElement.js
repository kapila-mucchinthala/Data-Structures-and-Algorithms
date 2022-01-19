function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].trim().split(" ").map(Number);
        
        function nearestSmallerElement() { 
            var str="";
            for (var a = 0; a < data.length; a++) {
                var count = 0;
                for (var b = a+1; b < data.length;b++){
                    if (data[b] < data[a]) {
                        str += data[b] + " ";
                        // console.log(str);
                        count++;
                        continue;
                    }
                }
                if (count == 0) {
                    str += "-1" + " ";
                }
            }
            console.log(str);

        }
        nearestSmallerElement();
            
    }
    

}

if (process.env.USER === "kishore") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`);
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