function divisibleSumPairs(n, k, ar) {
   let count=0;

   for(let i=0; i<ar.length;i++){
        for (let j=i+1; j<ar.length;j++){
            
            if(i<j&&(ar[i]+ar[j])%k==0){
                console.log(ar[i]+ar[j],ar[i],ar[j])
                count++
            }
        }
   }
return count;
}


console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6]))
