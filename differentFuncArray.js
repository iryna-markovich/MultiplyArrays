function multiply(a, b){
    return a*b;
   }
   function divide(a,b){
    return a/b;
   }
   function summarize(a, b){
    return a+b;
   }
   function substract(a, b){
    return a-b;
   }
   
   function makeNewArray(arr1, arr2){
        let newArray = [];
            for (i=0; i<arr1.length; i++){
            let result = multiply(arr1[i], arr2[i]) + divide(arr1[i], arr2[i]);
            newArray.push(result);
            }
        return newArray;
   }
   
   makeNewArray([3,5,6], [5,2,7]);