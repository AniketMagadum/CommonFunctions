function isAlphaNumeric(inputString){
  
  if (/(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})/.test(inputString)) {
    return true;
  }
  else{
    return false;
  }
  
}

function onlyAlphabetsAndNumber(value) {
    var regex = /^[a-z0-9]+$/i;
    return regex.test(value) ? true : false;
}
