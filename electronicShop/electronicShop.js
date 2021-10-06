function getMoneySpent(keyboards, drives, b) {
  let max = 0;

  for (let i of keyboards) {
    for (let j of drives) {
      let sum = i + j;
      if (sum <= b && sum > max) {
        max = i + j;
      }
    }
  }
  if (max) {
    return max;
  } else {
    return -1;
  }
}

console.log(getMoneySpent([5, 2, 8], [3, 1], 10));
