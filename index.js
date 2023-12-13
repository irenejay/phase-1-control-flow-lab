
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  }else if (feet > 2000 && feet <= 2500 ) {
    return 'I will gladly take your thirty bucks.';
  }

   else {
    // Handle other cases if needed
    return 'No can do.';
  }

}


  // Hypothetical implementation of ternaryCheckCity
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
  
  

// Updated Hypothetical implementation of switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    // Handle other tip cases if needed
    default:
      return 'Bye.';
  }
}