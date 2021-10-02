function migratoryBirds(arr) {
  // Write your code here
  let birds = {};
  let maxkey = 0;
  let value = 0;
  for (let i of arr) {
    birds.hasOwnProperty(i) ? (birds[i] += 1) : (birds[i] = 1);
  }

  let keyvs = Object.keys(birds);

  for (let key of keyvs) {
    if (birds[key] > value) {
      maxkey = key;
      value = birds[key];
      console.log(maxkey, "max--- value", value);
    }
  }
  return maxkey;
}

//console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
