var data = [
  {
      grade: "V",
      students: [
          {name: "Nrupul", marks: [10, 20, 30]},
          {name: "Prateek", marks: [20, 30, 40]}
      ]
  },
  {
      grade: "VI",
      students: [
          {name: "Aman", marks: [10, 20, 30]},
          {name: "Albert", marks: [20, 30, 40]}
      ]
  },
  {
      grade: "VII",
      students: [
          {name: "Yogesh", marks: [10, 20, 30]},
          {name: "Sandhya", marks: [20, 30, 40]}
      ]
  }
]
for (var i = 0; i < data.length; i++) {
    var arr = [];
    for (var j = 0; j < data[i].students.length; j++) {
        var totalMarks = data[i].students[j].marks.reduce(function(ac, el) {
            return ac + el;
        }, 0)
        arr.push(totalMarks);
    }
    //console.log(arr);
    if (arr[0] > arr[1]) {
        console.log(data[i].grade + "-" + data[i].students[0].name + "-" + arr[0]);
    }
    else {
     console.log(data[i].grade + "-" + data[i].students[1].name + "-" + arr[1]);

    }
}