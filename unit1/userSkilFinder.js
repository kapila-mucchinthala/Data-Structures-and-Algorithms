var data = [
    ["Nrupul", "cmd"],
    ["Prateek", "js"],
    ["Aman", "ds"],
    ["Nrupul", "python"],
    ["Albert", "js"],
    ["Albert", "react"],
    ["Aman", "algo"],
    ["Prateek", "html"],
    ["Nrupul", "sql"]
];


var users = {};

for (var i = 0; i < data.length; i++) {
    if (users[data[i][0]]) {
        users[data[i][0]].push(data[i][1]);
    }
    else {
        users[data[i][0]] = [data[i][1]];
    }
}
console.log(users);

for (key in users) {
    for (var j = 0; j < key.length; j++) {
        if (users[key][j] == "ds") {
            console.log(key);
        }
    }
}
