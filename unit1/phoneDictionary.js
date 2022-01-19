
// var users = {
// Ajay: 21345,
// RamDas : 32146,
// Rohith : 23522,
// Nihal : 98743,
// find : function (x) {
//         if (users[x] != undefined) {
//             console.log(users[x]);
//         }
//         else {
//             console.log("No user found");
//         }
//     }
// }

// users.find('Nihal')
// users.find('Mani')


var users = {
    data: [
        ["Ajay", 21345],
        ["RamDas", 32146],
        ["Rohith", 23522],
        ["Nihal", 98743]
    ],

    find: function (x) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i][0] == x) {
                return this.data[i][1];
            }
        }
        return "No user found";
    }
};

console.log(users.find("Mani"));
console.log(users["find"]("Nihal"));