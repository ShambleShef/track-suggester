// BUSINESS END //
(document).ready(function() {
  $("#formOne").submit(function(event) {
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
  };




// USER INTERFACE //
if ((q1 === "High" ) && (q2 === "Yes") && (q3 === "Computers") && (q4 === "Fast")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "High") && (q2 === "Yes") && (q3 === "Computers") && (q4 === "Slow")) {
  $("#resultA").hide();
  $("#resultB").show();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "High") && (q2 === "Yes") && (q3 === "Mobile Devices") (q4 === "Fast")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").show();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "High") && (q2 === "No") && (q3 === "Computers") && (q4 === "Fast")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").show();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "Low") && (q2 === "Yes") && (q3 === "Computers") && (q4 === "Fast")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "Low") && (q2 === "Yes") && (q3 === "Computers") && (q4 === "Slow")) {
  $("#resultA").hide();
  $("#resultB").show();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "Low") && (q2 === "Yes") && (q3 === "Mobile Devices") && (q4 === "Fast")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").show();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "Low") && (q2 === "No") && (q3 === "Computers") && (q4 === "Fast")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").show();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "High") && (q2 === "Yes") && (q3 === "Mobile Devices") && (q4 === "Slow")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}
event.preventDefault();
