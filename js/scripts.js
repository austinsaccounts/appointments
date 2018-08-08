var time;
var date;
var description;
var name;








//User Interface Logic


$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    var  time = $("#appointment-time").val();
      var date = $("#appointment-date").val();
      var desc = $("#appointment-description").val();
      var name = $("#appointment-name").val();
      console.log(desc);
      var response = "<p> Thank you " + name + " your appointment for, " + desc + " is scheduled for <br>" + date + " at " + time + ".</p>" ;
console.log(time);
  $("#output").html(response);

  });

});
