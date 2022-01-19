function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 3 * cases - 2; i = i + 3) {
        var n = +newInput[i+1];
        var A = newInput[i + 2].split(" ").map(Number);
        var B = newInput[i + 3].split(" ").map(Number);

        function twoSortedArrays() {
          var l = 0;
          var r = B.length - 1;
          var count = 0;
          while ((l < A.length) && (r >= 0)) {
            if (A[l] == B[r]) {
              count++;
              // console.log(count);
              l++;
              r--;
            }
            else if (A[l] > B[r]) {
              r--;
            }
            else if (A[l] < B[r]) {
              l++;
            }
          }
          return count;
        }
        console.log(twoSortedArrays());
    }
}

if (process.env.USER === "kishore") {
  runProgram(`2
6
1 2 2 3 4 5
4 4 3 2 1 1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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