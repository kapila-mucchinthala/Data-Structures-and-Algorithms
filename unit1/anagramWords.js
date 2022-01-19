var data = {
    anagram: function (x, y) {
        var a = x.split("").sort().join("").trim();
        var b = y.split("").sort().join("").trim();

       if (a == b) {
            console.log("True");
        }
        else {
            console.log("False");
        }
        
    }
}

data.anagram("listen","sil ent");
data.anagram("here","heir");
data.anagram("wind","dwi ne");


// var x = "here";
// var a = x.split("");
// console.log(a);
// var c = a.sort();
// console.log(c +" "+a);

// var d = c.join("")
// var e = d.trim();



// console.log(a + "  " + c + "  "+d+"  "+e);
   
    
    