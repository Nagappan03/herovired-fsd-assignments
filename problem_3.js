let multipleArr = [];
function arrayOfMultiples(num, length){
    for(i = 1; i <= length; i++){
        let result = num * i;
        multipleArr.push(result);
    }
    console.log(multipleArr);
}

arrayOfMultiples(12,10);
