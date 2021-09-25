function timeConversion(s) {
    // Write your code here
    let res = s.split(":");
  
    if (/(PM)/.test(res[2]) && res[0] != 12) {
      res[0] = +res[0] + 12;
      res[2] = res[2].slice(0, 2);
      return res.join(":");
    } else if (/(AM)/.test(res[2]) && res[0] == 12) {
      res[0] = '00';
      res[2] = res[2].slice(0, 2);
  
      return res.join(":");
    }
  else{
       res[2] = res[2].slice(0, 2);
       return res.join(":");
  }
   
  }
console.log(timeConversion("12:05:45AM"));
