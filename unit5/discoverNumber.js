function discoverNumber(sortedArr,x) {
            var low = 0;
            var high = sortedArr.length - 1;
            
            while (low <= high) { 
              var mid = Math.floor((low + high) / 2);
                if (sortedArr[mid] == x) {
                    return "YES";
                }
                if (sortedArr[mid] > x) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }            
            return "NO";
}
        
function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].trim().split(" ").map(Number);
    var n = line[0];
    var q = line[1];
    var arr = newInput[1].split(" ").map(Number);
    var sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    for (var i = 0; i < newInput.length; i++) {
      var x = +newInput[i + 2];
      
     console.log(discoverNumber(sortedArr,x));
    }
}
if (process.env.USER === "kishore") {
  runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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