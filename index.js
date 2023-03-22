// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
   const hq = 42;
   return Math.abs(hq - someValue);
}

function distanceFromHqInFeet(someValue) {
   const blocks = distanceFromHqInBlocks(someValue);
   const feetPerBlock = 264; 
   return blocks * feetPerBlock;
}
 
function distanceTravelledInFeet(start, destination){
  const distance = Math.abs(start - destination);
  const feetperBlock = 264;
  return distance * feetperBlock;
}

 

 function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination);
   let farePrice;
 
   if (distance <= 400) { 
     farePrice = 0;
   }  else if (distance > 400 && distance <= 2000) {
    farePrice = (distance - 400) * 0.02;
   } else if (distance > 2000 && distance <= 2500) {
      farePrice = 25;
   } else {
     return farePrice = "cannot travel that far";
   }
 
   return farePrice;
 
  }