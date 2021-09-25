function theLoveLetterMystery(s) {
    // Write your code here
    let code=0;

    for(let i=0; i< Math.floor(s.length/2); i++){
     console.log(s.charAt(i), s.charAt(s.length-i-1))
     code += Math.abs(s.charCodeAt(i)-s.charCodeAt(s.length-i-1))
        console.log(code)

    }
return code;
}




console.log(theLoveLetterMystery('abcdfg'))