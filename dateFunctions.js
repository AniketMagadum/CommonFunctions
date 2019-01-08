function isExpired(edate) {
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    edate = new Date(edate);
    return edate < currentDate ? true : false;
}

function getRemainingDays(edate){
    var warningDate = new Date();
    warningDate.setHours(0,0,0,0);
    warningDate.setDate(warningDate.getDate() + 5);
    edate=new Date(edate);
    var timeDiff=warningDate.getTime()-edate.getTime();
    var diffDays=Math.ceil(timeDiff/(1000*3600*24));
    var daysLeft=5-diffDays;
    return daysLeft;
}

function getRemainingDaysFromExpiry(edate){
    var expired=new Date(edate);
    var currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    var timeDiff=currentDate.getTime()-expired.getTime();
    var diffDays=Math.ceil(timeDiff/(1000*3600*24));
    var difference=0-(diffDays);
    return difference;
}

function validateBirthDate(datepickerid,message){
  var flag=true;
  var enteredDate=document.getElementById(datepickerid).value;
  enteredDate=enteredDate.split("/").reverse().join("/");
  checkEmpty(enteredDate)?$("#"+datepickerid+"_check").text("This field is required."):$("#"+datepickerid+"_check").text("");
  if (!checkEmpty(enteredDate)) {
       adultAgeValidation(enteredDate,datepickerid,message);
       if (getAge(enteredDate)<18) {
           flag=false;
       }
  }else{flag=false}
  return flag;
}


function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function adultAgeValidation(edate,datepickerid,message=""){
    (getAge(edate)<18)?$("#"+datepickerid+"_check").text(message):$("#"+datepickerid+"_check").text("");
}
