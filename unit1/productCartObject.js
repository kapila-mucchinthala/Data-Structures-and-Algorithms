var list = {
    data: [],
    addData: function (name, quantity, price) {
      this.data.push({name:name,quantity:quantity,price:price})  
    },
    total: function () {
        var total = this.data.reduce(function (ac, el) {
           return ac + (el.quantity*el.price)
        }, 0)
        return total;
    }
}

list.addData("Rice", 2, 60)
list.addData("Dal", 3, 50)
list.addData("Salt", 1, 20)
console.log(list.data);
console.log(list.total());