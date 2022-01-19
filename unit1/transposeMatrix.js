var data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 2, 3]
];
b = [];
for (var i = 0; i < data[0].length; i++) {
    b.push([]);
    for (var j = 0; j < data.length; j++) {
        b[i][j] = data[j][i]; 
    }
    
}
console.log(b);