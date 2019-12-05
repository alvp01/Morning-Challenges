/*
Problem:
Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

Examples:
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.

For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.


*/

//Abel's solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  let days = 0;
  let currentHeight = 0;
  while (currentHeight != desiredHeight){
    days++;
    currentHeight += upSpeed;
    if(currentHeight >= desiredHeight){
    return days;}
    currentHeight -= downSpeed;
    if(currentHeight == desiredHeight){
    return days;}
  }
  return days;
}

//Ramesh's Solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  var days = 1;
  var height = upSpeed;
  while(height<desiredHeight){
    height += upSpeed;
    height -= downSpeed;
    days++;
  }
  return days;
}
