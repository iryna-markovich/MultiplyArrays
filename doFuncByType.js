function multiply(x, y) {
    return x*y;
}
function divide(x, y) {
    return x/y;
}
function summarise(x, y) {
    return x+y;
}
function substract(x, y) {
    return x-y;
}

function doDifferentFunc(elem1, elem2, elemSymbol) {
    switch (elemSymbol) {
        case "*":
        return multiply(elem1, elem2);
        case "/":
        return divide(elem1, elem2);
        case "+":
        return summarise(elem1, elem2);
        case "-":
        return substract(elem1, elem2);
    }
}

function doFuncByType(array1, array2, symbol) {
    let newArray = [];
        for (i=0; i<array1.length; i++) {
            let newElem = doDifferentFunc(array1[i], array2[i], symbol);
            newArray.push(newElem);
        }
    return newArray;
}

doFuncByType([3, 8, 3], [0, 1, 9], "+");
doFuncByType([0, 5, 9], [4, 54, 3], "-");
doFuncByType([4, 3, 34], [21, 6, 13], "/");
doFuncByType([3, 7, 1], [9, 6, 9], "*");