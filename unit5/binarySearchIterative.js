
function runProgram(input) {
    var newInput = input.split("\n");
    var line = newInput[0].split(" ").map(Number);
    var n = line[0];
    var k = line[1];
    var arr = newInput[1].split(" ").map(Number);

    for (var i = 0; i < arr.length; i++) {
    var minimum = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[minimum];
    arr[minimum] = temp;
    } 
    
    function binarySearchIterative() {
        var low = 0;
        var high = arr.length - 1;
        var mid = Math.floor((low + high) / 2);
        while (low <= high) {
            
            if (arr[mid] == k) {
                return 1;
            }
            if (arr[mid] > k) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        return -1;
    }
    console.log(binarySearchIterative());  
  
}
if (process.env.USER === "kishore") {
  runProgram(`6 5
11 34 5 4 21 0`);
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