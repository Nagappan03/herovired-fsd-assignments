function findDuplicates(arr, len) {
    let ifPresent = false;
    let al = new Array();
 
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] == arr[j]) {
                if (al.includes(arr[i])) {
                    break;
                } else {
                    al.push(arr[i]);
                    ifPresent = true;
                }
            }
        }
    }
    if (ifPresent == true) {
        console.log(al);
    }
    else {
        console.log("No duplicates present in arrays");
    }
}
 
let arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
let n = arr.length;
 
findDuplicates(arr, n);