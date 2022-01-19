var a = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function (x) {
        var res = "";
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] < x) {
                res += this.data[i] + " ";
            }
        }  
        console.log(res);
    },
    greaterThanItems: function (x) {
        var res = "";
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] > x) {
                res += this.data[i] + " ";
            }
        }  
        console.log(res);
    }
}
a.lessThanItems(4)
a.greaterThanItems(6)