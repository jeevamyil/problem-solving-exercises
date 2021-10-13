const powerSum = (X, N, exponentIncrement = 1) => {
  let exponentVal = Math.pow(exponentIncrement, N);
  if (exponentVal > X) return 0;
  else if (exponentVal === X) return 1;
  else
    return (
      powerSum(X - exponentVal, N, exponentIncrement + 1) +
      powerSum(X, N, exponentIncrement + 1)
    );
};

console.log(powerSum(10, 2));
