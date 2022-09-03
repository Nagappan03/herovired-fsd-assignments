function nearestVowel(s) {
  let obj = { a: 99, e: 99, i: 99, o: 99, u: 99 };
  let min = 99;
  let sol = "";
  let vowelArr = ['a', 'e', 'i', 'o', 'u'];
  for (let char of vowelArr) {
    let diff = Math.abs(char.charCodeAt(0) - s.charCodeAt(0));
    if (diff < min) {
      min = diff;
      sol = char;
    }
  }
  return sol;
}

console.log(nearestVowel('z'));