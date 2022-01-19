function runProgram(input) {
    var newInput = input.split("\n");
    var cases = +newInput[0];
    for (var i = 0; i <= 2 * cases - 2; i = i + 2) {
        var n = +newInput[i + 1];
        var data = newInput[i + 2].split(" ").map(Number);
        var result = sum(data, 0);
        console.log(result);
    }   
}
function sum(arr,i) {
    if (i == arr.length - 1) {
        return 0;
    }
    else {
        var diff = Math.abs(arr[i] - arr[i + 1]);
        return diff + sum(arr,i+1);
    }
}
if (process.env.USER === "kishore") {
    runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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

   

