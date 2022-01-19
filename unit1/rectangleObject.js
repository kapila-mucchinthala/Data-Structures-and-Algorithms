var data = {
    length : 12,
    breadth : 8,
    area : function () {
        console.log(this.length * this.breadth);
    },
    perimeter : function () {
        console.log(2 * (this.length + this.breadth));
    }
}
data.area();
data.perimeter();