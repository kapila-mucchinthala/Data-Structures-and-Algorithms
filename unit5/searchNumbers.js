//Enter code here
function runProgram(input) {
    var newInput = input.split("\n");
    var N = +newInput[0];
    var data = newInput[1].split(" ").map(Number);
    data = data.sort((a, b) => {
        return a - b;
    })
    var queries = +newInput[2];
    var result = "";
    for (var i = 0; i < queries; i++) {
        var q = newInput[i+3].split(" ").map(Number);
        var l = q[0];
        var r = q[1];
        var count = 0;
            
        for (var a = 0; a < data.length; a++) {
            if (data[a] > r) {
                break;
            }
            else if(data[a] >= l && data[a] <= r) {
                count++;
            }      
            
        }
        result += count + ' ';
            
    }       
    console.log(result);

}

if (process.env.USER === "kishore") {
    runProgram(`5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
`);
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
