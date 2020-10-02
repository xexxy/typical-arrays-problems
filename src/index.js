exports.min = function min(array) {
    if ( Array.isArray(array) && array.length != 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if ( Array.isArray(array) && array.length != 0) {
        let maxNumber = array[0];
        array.forEach(element => {
            if (maxNumber < element) {
                maxNumber = element;
            }
        });
        return maxNumber;
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if ( Array.isArray(array) && array.length != 0) {
        let sum = array.reduce((accumulator, current) => accumulator + current);
        return sum / array.length;
    } else {
        return 0;
    }
}
