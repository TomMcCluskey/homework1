function stringTimes(string, number) {
    var final = "";
    for (number; number; number--) {
        final = final + string;
    }
    return final;
}
    

function unitCount(value, count, unit) {
    return Math.floor(value / unit) == count;
}

function romanize(number) {
    
    var final = "";

//    function romify(letter, unit) {
//        return final.concat(stringTimes(letter, Math.floor(number / unit)));
//    }

    final = final.concat(stringTimes("M", Math.floor(number / 1000)));
    number %= 1000;
    if (unitCount(number, 9, 100)) {
        final = final.concat("CM")
    } else {
        final = final.concat(stringTimes("D", Math.floor(number / 500)));
        number %= 500;
        if (unitCount(number, 4, 100)) {
            final = final.concat("CD"); 
        } else {
            final = final.concat(stringTimes("C", Math.floor(number / 100)));
        }    
    }
    number %= 100;
    if (unitCount(number, 9, 10)) {
        final = final.concat("XC");
    } else {
        final = final.concat(stringTimes("L", Math.floor(number / 50)));
        number %= 50;
        if (unitCount(4, 10)) {
            final = final.concat("XL");
        } else {
            final = final.concat(stringTimes("X", Math.floor(number / 10)));
        }
    }
    number %= 10;
    if (number == 9) {
        final = final.concat("IX");
    } else {
        final = final.concat(stringTimes("V", Math.floor(number / 5)));
        number %= 5;
        if (number == 4) {
            final = final.concat("IV");
        } else {
            final = final.concat(stringTimes("I", Math.floor(number)));
        }
    }
    return final;
}

assert(romanize(2)==='II',"Test 2 failed");
assert(romanize(4)==='IV',"Test 4 failed");
assert(romanize(418)==='CDXVIII',"Test 418 failed");
assert(romanize(1972)==='MCMLXXII',"Test 1972 failed");
assert(romanize(1999)==='MCMXCIX',"Test 1999 failed");