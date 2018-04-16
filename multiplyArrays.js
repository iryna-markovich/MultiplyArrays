function multiply(i, j) {
    return i*j;
}
function multiplyArr(numberArray1, numberArray2) {
    let multipliedArray = [];
    for (let i=0; i < numberArray1.length; i++){
        let result = multiply(numberArray1[i], numberArray2[i]);
        multipliedArray.push(result);
    }
    return multipliedArray;
}
multiplyArr([2, 4, 5],[3, 1, 4]);



