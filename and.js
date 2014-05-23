function and(a, b) {
    if (a) {
        if (b) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
}
}

function and3(a, b, c) {
    var ab = and(a, b);
    return and(ab, c);
}

function andN(length, values) {
    for(var counter = 0; counter < length; counter++) {
        if (!and(values[counter], values[counter] + 1)) {
            return false;
        }
    }
    return true;
}

// This and function cannot completely replace && because
// it will always require both operators to make sense. In
// contrast, && will not even evaluate the second operator
// if the first one is false. For example, false && kwyjibo
// will successfully return false even if kwyjibo is not
// defined, whereas and(false, kwijibo) will throw a 
// ReferenceError