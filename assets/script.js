//get time at top of page
var currentDate = dayjs();
$("#currentDay").text(currentDate);




$(document).ready(function(){

  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })


    var currentTimeIs = currentDate.hour();

    // loop over time blocks to show 1 character to right of hour
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
//hour9
console.log(timeBlock, currentTimeIs);
// add classes depending on time so that colors indicate past, present and future
if (timeBlock < currentTimeIs) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
}
else if (timeBlock === currentTimeIs) {
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");
}
else {
  $(this).removeClass("present");
  $(this).removeClass("past");
  $(this).addClass("future");
}
  });

//local storage for anything saved at each hour

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

})
  