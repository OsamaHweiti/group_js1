 function tellFortune( c, l, p, j ){
   
    return `you will be a ${j} in ${l}, and mariied to ${p} with ${c} kids` ;
}
var value = tellFortune('4',"jordan","alice","web developer");

console.log(value)

 
///-----task 2///
 function calculateDogAge(age){

    var dogage= age*7;

   return `my dogie is ${dogage} years old in dog years`

}

 var value =calculateDogAge(23)
 console.log(value)
  
 

 ////----task3--///
 function calculateSupply(age, y){
    var cups = (100-age)*y*365
    return `You will need ${cups} cups of tea to last you until the ripe old age of 100`

 }
var value = calculateSupply(23,3)
console.log (value) 

//// task 4////
  function greet(a){
    var name = "adam"
    return`"Hello ${name}"`
 }
 var valu =greet ("adam")
 console.log (valu)

  
 ///task 5
 function double (cat ){
    return 2*cat; // x is undefind in cat 
 }

 
function double(x) {
    return 2 * 7; // we cant put parametr in function 
  }
  function double(x) {
    return 2 * x; /// we cant put a string coutation in function
  }