function birthdayCakeCandles(candles) {
  // Write your code here

  let max = Math.max(...candles);
 
  console.log(candles.filter((item)=>item===max).length)
}

birthdayCakeCandles([1, 2, 3, 4, 6, 6]);

/*function birthdayCakeCandles(candles) {
  // Write your code here

  let max = Math.max(...candles);
  let nums = 0;
  for (let i of candles) {
    if (i === max) {
      nums++;
    }
  }

  return nums;
}
*/