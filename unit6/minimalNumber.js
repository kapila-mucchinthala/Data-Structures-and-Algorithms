function runProgram(input) {
  var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);
        data = data.sort((a, b) => {
            return a - b;
        })
        
        function minimalNumber() {
            var arr1 = [];
            var arr2 = [];
            // console.log(data);
            for (var a = 0; a < data.length; a++) {
                if (data[a] == 0) {
                    arr1.push(data[a]);
                }
                else {
                    arr2.push(data[a]);
                }
            }
            var str= "";
            var index=0;
            str += arr2[0];
            for (var a = 1; a < arr2.length; a++){
                if (arr2[a] == arr2[a-1]) {
                    // arr3.push(arr2[a]);
                    str += arr2[a];
                    // console.log(a);
                    index += a;
                }

            }
            for (var a = 0; a < arr1.length; a++){
                // arr3.push(arr1[a]);
                str += arr1[a];
            }
            for (var a = index+1; a < arr2.length; a++){
                // arr3.push(arr2[a]);
                str += arr2[a];
            }
            console.log(str);
        }
        minimalNumber();
    }
    

}

if (process.env.USER === "kishore") {
  runProgram(`3
4
2 1 0 0
4
1 4 2 3
4
5 0 3 2`);
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