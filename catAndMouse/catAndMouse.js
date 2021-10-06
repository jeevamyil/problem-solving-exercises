function catAndMouse(x, y, z) {

let cat_a =Math.abs(z-x);
let cat_b =Math.abs(z-y);
if(cat_a==cat_b){
    return "Mouse C"
}
else if(cat_a<cat_b){
return "Cat A";
}
else {
    return "Cat B";
    }
}


console.log(catAndMouse(1,3,2) )