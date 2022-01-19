function runProgram(input) {
    var newInput = input.split("\n");
    var cases = Number(newInput[0]);
    for (var i = 0; i <= 2 * cases - 2; i=i+2) {
        var line = newInput[i + 1].split(" ").map(Number);
        var data = newInput[i + 2].split(" ").map(Number);
        var n = line[0];
        var B = line[1];

        function twoSum() {
            var result = "";
            var l = 0;
            var r = n - 1;
            while (l < r) {
                if (data[l] + data[r] == B) {
                    result = l + " " + r;
                    return result
                }
                else if (data[l] + data[r] > B) {
                    r--;
                }
                else if(data[l] + data[r] < B){
                    l++;
                }
            }

            return -1 + " " + -1;
        }
        console.log(twoSum());
    }

}

if (process.env.USER === "kishore") {
    runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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