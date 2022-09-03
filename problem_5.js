function getArrayDepth(value) {
  return Array.isArray(value) ? 
    1 + Math.max(0, ...value.map(getArrayDepth)) :
    0;
}

let testRy = [1, [2, [3, 4]]];
console.log(getArrayDepth(testRy));