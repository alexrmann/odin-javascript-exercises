const sumAll = function(arg1, arg2) {
    const sumArray = [];
    // Identify whether arg1 and arg2 are positive whole integers
    let smallArg;
    let largeArg;
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2)) { 
        return "ERROR";
    } else if (arg1 > 0 && arg2 > 0) {
        // Identify which arg is greater
        if (arg1 > arg2) {
            largeArg = arg1;
            smallArg = arg2;
        } else {
            smallArg = arg1;
            largeArg = arg2;
        }
    } else {
        return "ERROR";
    }

    // Create an array with all values between arg1 and arg2, inclusive
    for (let i = smallArg; i <= largeArg; i++) {
        sumArray.push(i);
    }

    // Sum the values of the array and assign to sum
    const sum = sumArray.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
