var a = {
    item: "FireFox",
    vowelsCount: function () {
        var vSmall = "aeiou";
        var vCaps = "AEIOU";
        var count = 0;
        for (var i = 0; i < this.item.length; i++) {
            for (var j = 0; j < vSmall.length; j++) {
                if (this.item[i] == vSmall[j] || this.item[i] == vCaps[j]) {
                    count++;
                }
            }
        }
        console.log(count);
    },
    reverse: function () {
        var res = "";
        for (var i = this.item.length - 1; i >= 0; i--) {
            res += this.item[i];
        }
            console.log(res);
    },
    changeCase: function () {
        var res = "";
        var small = "abcdefghijklmnopqrstuvwxyz";
        var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < this.item.length; i++) {
            for (var j = 0; j < small.length; j++) {
                if (this.item[i] == small[j]) {
                    res += caps[j];
                }
                else if (this.item[i] == caps[j]) {
                    res += small[j];
                }
            }
        }
        console.log(res);
    }
}
a.vowelsCount()
a.reverse()
a.changeCase()