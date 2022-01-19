var calc = {
    a: 27,
    b: 15,
    addition: function() {
        console.log(this.a + this.b);
    },
    subtraction: function () {
        console.log(this.a - this.b);
    },
    multiplication: function () {
        console.log(this.a * this.b);
    },
    division: function () {
        console.log(this.a / this.b);
    }
}

calc.addition()
calc.subtraction()
calc.multiplication()
calc.division()