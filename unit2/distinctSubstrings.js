function runProgram(input) {
    var newInput = input.split("\n");
    var cases = newInput[0];
    for (var i = 0; i <=  2*cases-2 ; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split("");

        function distinctSubstring() {
            var arr = [];
            for (var j = 0; j < data.length; j++){
                var str = "";
                for (var k = j; k < data.length; k++){
                    str += data[k];
                    console.log(str);
                    arr.push(str);
                }
            }


            var obj = {};
            for (var a = 0; a < arr.length; a++){
                if (obj[arr[a]] == undefined) {
                    obj[arr[a]] = 1;
                }
               
            }
            var count = 0;
            for (key in obj) {
                count++;
            }
            console.log(count);
        }
        distinctSubstring();
        
    }
   
}

if (process.env.USER === "kishore") {
    runProgram(`2
5
abcde
3
aaa`);
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