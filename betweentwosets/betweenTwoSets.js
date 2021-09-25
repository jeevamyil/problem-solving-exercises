function getTotalX(a, b) {
    // Write your code here
    let min= Math.max(...a);
    let max=Math.min(...b);
    let count=0;
    for(let i=min;i<=max;i++){
       // console.log(i);
        if(a.every(v=>i%v==0)&&b.every(c=>c%i==0)){
            count++
        }
      /*  if(i%a[0]==0&&i%a[1]==0&&b[0]%i==0&&b[1]%i==0&&b[2]%i==0){
            count++
        }*/
    }
    return count;

}


 console.log(getTotalX([2,4], [16,32,96]) )

