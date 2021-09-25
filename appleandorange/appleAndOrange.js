function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let applesTot = 0;
      let orangesTot = 0;
      
      applesTot=apples.filter( apple=>
          a + apple >= s && a + apple <= t 
      ).length
      oranges.forEach(orange=>{
          if (b + orange >= s && b + orange <= t) orangesTot++;
      })
      console.log(applesTot);
      console.log(orangesTot);
  
  }