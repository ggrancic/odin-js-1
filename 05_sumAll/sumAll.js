const sumAll = function(startNum, endNum) {
    let sum = 0;
    let n, m;

    if ( typeof(startNum) === 'number' && typeof(endNum) === 'number' && startNum >= 0 && endNum >= 0) {
        (startNum < endNum) ? (n = startNum, m = endNum) : (n = endNum, m = startNum);
        for ( n; n <= m; n++) {
            sum += n;
        }
    
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
