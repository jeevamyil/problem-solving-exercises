function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let minCount = 0;
    let maxCount = 0;
  
    for (let i of scores) {
     
      if (i < min) {
        min = i;
        minCount++;
      }
      if (i > max) {
        max = i;
        maxCount++;
      }
    }
    return[maxCount, minCount];
  }
  

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
