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
