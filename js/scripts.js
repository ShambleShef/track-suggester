// BUSINESS END //
(document).ready(function() {
  $("#formOne").submit(function(event) {
    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
  };




// USER INTERFACE //
if ((q1 === "" ) && (q2 === "") && (q3 === "") && (q4 === "")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "") && (q4 === "")) {
  $("#resultA").hide();
  $("#resultB").show();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "") (q4 === "")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").show();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "") && (q4 === "")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").show();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "") && (q4 === "")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "") && (q4 === "")) {
  $("#resultA").hide();
  $("#resultB").show();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").show();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "")) {
  $("#resultA").hide();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").show();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}

else if ((q1 === "") && (q2 === "") && (q3 === "")) {
  $("#resultA").show();
  $("#resultB").hide();
  $("#resultC").hide();
  $("#resultD").hide();
  $("#form-quiz").hide();
  $("#form-dummy").hide();
}
event.preventDefault();
