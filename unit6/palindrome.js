function palindrome(s) {
    var arr = s.split("").sort();

    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] == undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    console.log(obj);

    var data = [];
    var count1 = [];
    var single = [];
    for (i in obj) {
        if (obj[i] % 2 == 0) {
            data.push(i);
            count1.push(obj[i]);
        }
        else if (!(obj[i] == 1) && (obj[i] % 2 !== 0)) {
            data.push(i);
            count1.push(obj[i] - 1);
            
            single.push(i);
        }
        else if (obj[i] == 1) {
            single.push(i);
        }
    }
    
    var str1 = "";
    var str2 = "";
    var str3 = single.sort();

    for (var b = 0; b < data.length; b++) {
        var mid = count1[b] / 2;
        for (var c = 0; c < mid; c++) {
            str1 += data[b];
        }
    }
    for (var c = str1.length - 1; c >= 0; c--) {
        str2 += str1[c];
    }
    
    if (str3.length == 0) {
        return str1 + str2;
    }
    else {
        return str1 + str3[0] + str2;
    }
}

console.log(palindrome('vaaagghhh'));


// it should be lexicographicall
//  max length
// rearrange the letters


