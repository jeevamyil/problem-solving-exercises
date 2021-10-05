function pageCount(totalpages, requiredpages) {
  // Write your code here
  const requiredpagesturns = Math.floor(p / 2);
  const totalpagesturn = Math.floor(n / 2);
  return Math.min(requiredpagesturns, totalpagesturn - requiredpagesturns);
}

console.log(pageCount(5, 3));
