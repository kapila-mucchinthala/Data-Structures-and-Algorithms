var marks = {
    data: [
        ["Nrupul", 10],
        ["Prateek", 20],
        ["Aman", 30],
        ["Albert", 5],
        ["Yogesh", 15]
    ],
    average: function () {
        var total = 0;
        var count = 0;
        for (var i = 0; i < this.data.length; i++) {
            total += this.data[i][1];
            count++;
        }
        console.log(total / count);
    },
    minimum: function () {
        var temp = marks.data[0][1];
        var res = "";
        for (var i = 1; i < marks.data.length; i++) {
            if (marks.data[i][1] < temp) {
                temp = marks.data[i][1];
                res = marks.data[i][0];
            }
        }
        console.log(res);
    },
    maximum: function () {
        var temp = this.data[0][1];
        var res = "";
        for (var i = 1; i < this.data.length; i++) {
            if (this.data[i][1] > temp) {
                temp = this.data[i][1];
                res = this.data[i][0];
            }
        }
        console.log(res);
    }
}

marks.average()
marks.minimum()
marks.maximum()