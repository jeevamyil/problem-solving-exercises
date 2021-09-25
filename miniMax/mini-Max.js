function miniMaxSum(arr) {
    // Write your code here
    arr.sort()
    let temp= arr.reduce((a,b)=>a+=b)
    let min= temp-arr[arr.length-1];
    let max= temp-arr[0];
    console.log(min,max)
}

 miniMaxSum([1,3,5,7,9]) 