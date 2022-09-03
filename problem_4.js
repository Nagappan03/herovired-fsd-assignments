var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let longestStreak = 1;
  let max = 0;
  set.forEach(x => {
    if (!set.has(x - 1)) {
      let num = x;
      while(set.has(++num)) { ++longestStreak; }
      max = Math.max(max, longestStreak);
      longestStreak = 1;      
    }
  });
  return max;
};

console.log(longestConsecutive([2,6,1,9,4,5,3]));