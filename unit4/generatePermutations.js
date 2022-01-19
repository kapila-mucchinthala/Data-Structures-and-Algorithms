
function permute(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = permute(xs.slice(0, i).concat(xs.slice(i + 1)));

    if(!rest.length) {
      ret.push([xs[i]])
    } else {
      for(let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}

function mat(a){
for(var i = 0; i < a.length; i++) {
    var result = ""
  for(var z = 0; z < a[i].length; z++) {
    result += a[i][z]+" "
  }
  console.log(result)
}
}

function runProgram(input){
    var newInput = input.split("\n");
    var nums = newInput[1].split(" ");
    var op = permute(nums);
    var output = mat(op);
}


if (process.env.USER === "kishore") {
    runProgram(`3
1 2 3`);
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