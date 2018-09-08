function isAlphaNumeric(inputString){
  
  if (/(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})/.test(inputString)) {
    return true;
  }
  else{
    return false;
  }
  
}