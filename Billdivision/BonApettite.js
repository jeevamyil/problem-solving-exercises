function bonAppetit(bill, k, b) {
  // Write your code here

  let actualArray = [...bill.slice(0, k), ...bill.slice(k + 1)];
  let actualPrice = actualArray.reduce((item, cv) => item + cv) / 2;
  if (actualPrice === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - actualPrice);
  }
}

bonAppetit([3, 10, 2, 9], 1, 7);
