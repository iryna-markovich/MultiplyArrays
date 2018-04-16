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



function doOperation(v1, v2, type){

    switch(type){
        case '*': 
        return multiply(v1, v2);
        case '/':    
        return divide(v1, v2);
        case '+':
        return summarize(v1, v2);
        case '-':
        return substract(v1, v2);
    }
   }


function switchArray(arr1, arr2, typeOp){
    let newArray = [];
        for (i=0; i<arr1.length; i++){
        let result = doOperation(arr1[i], arr2[i], typeOp);
        newArray.push(result);
        }
    return newArray;

}

switchArray([3, 5], [4,1], "*");



