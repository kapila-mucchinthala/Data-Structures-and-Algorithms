var data = [
  ["Nrupul", 32],
  ["Prateek", 30],
  ["Aman", 26],
  ["Ankur", 34],
  ["Albert", 28],
  ["Yogesh", 44],
  ["Sidharth", 22]
];
function createUser(name, age) {
    return { name: name, age: age };
}

var users = [];
for (var i = 0; i < data.length; i++) {
    users.push(createUser(data[i][0], data[i][1]));

}

for (var j = 0; j < users.length; j++) {
    var output = "";
    if (users[j].age > 30) {
        output += users[j].name;
        console.log(output);
    }
}

// var output = users.filter(function (el) {
//     return (el.age>30);
// })
// console.log(users);
// console.log(output);