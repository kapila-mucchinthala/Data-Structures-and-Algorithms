//Enter code here
function runProgram(input) {
  var newInput = input.split("\n");
  var N = +newInput[0];
  var str = newInput[1];

  function Masai() {
    var vowels = "aeiou";
    var res = "";
    for (var i = 0; i < vowels.length; i++) {
      if (str[0] === vowels[i]) {
        str += 'h' + 'u' + 'l' + 'k';
        return str;
      }
    }
    str += 't' + 'h' + 'o' + 'r';
    return str;
  }
  console.log(Masai());
}

if (process.env.USER === "kishore") {
    runProgram(`5
abced`);
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
