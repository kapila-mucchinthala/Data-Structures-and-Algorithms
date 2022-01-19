function runProgram(input) {
    var newInput = input.split("\n");
    var [N,M,K] = newInput[0].split(" ").map(Number);
    var data = newInput[1].split(" ").map(Number);
    create3DArray(data, N, M, K);

    function traverse3D(array3D) {
        array3D.forEach(function (row2D) {
            row2D.forEach(function (row1D) {
                console.log(row1D.join(" "));
            }) 
        });
    }

    function create3DArray(data, N, M, K) {
        var index = 0;
        var array3D = [];
        for (var a = 0; a < N; a++) {
            var array2D = [];
            for (var b = 0; b < M; b++) {
                var array1D = [];
                for (var c = 0; c < K; c++) {
                    array1D.push(data[index++]);
                }
                array2D.push(array1D);
            }
            array3D.push(array2D);
        }
        traverse3D(array3D);
    }
    
}

if (process.env.USER === "kishore") {
    runProgram(`2 2 2
1 2 3 4 5 6 7 8`);
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