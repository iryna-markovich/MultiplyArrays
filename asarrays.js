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


for ("*" in doFuncByType) multiply(array1[i], array2[i]);
for ("/" in doFuncByType) divide(array1[i], array2[i]);
for ("+" in doFuncByType) summarise(array1[i], array2[i]);
for ("-" in doFuncByType) substract(array1[i], array2[i]);

function doFuncByType(array1, array2, symbol) {
    let newArray = [];
        for (i=0; i<array1.length; i++) {
            let newElem = doDifferentFunc(array1[i], array2[i], symbol);
            newArray.push(newElem);
        }
    return newArray;
}

doFuncByType([4, 3, 34], [21, 6, 13], "/");
