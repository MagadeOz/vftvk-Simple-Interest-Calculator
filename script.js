function compute() {
  //Gets values
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  //Calculates interest
  var interest = principal * years * rate / 100;
  //Calculates dates
  var future_year = new Date().getFullYear() + parseInt(years);

  //Real number validation
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  } else {
    //Shows the result
    document.getElementById("result").innerHTML =
      "If you deposit <span id='highlight'>" + principal + "</span>, <br/>" +
      "at an interest rate of <span id='highlight'>" + rate + "</span>. <br/>" +
      "You will receive an amount of <span id='highlight'>" + interest + "</span>, <br/>" +
      "in the year <span id='highlight'>" + future_year + "</span>.";
    return true;
  }
}

function rateValue() {
  var updateVal = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = updateVal + "%";
}
