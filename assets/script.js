//get time at top of page

var currentDate = dayjs().format("dddd, MMMM DD HH:mm:ss");
$("#currentDay").text(currentDate);

var currentTimeIs = dayjs().hour();


$(document).ready(function(){

  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  })


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

$("#hour9am .description").val(localStorage.getItem("hour9am"));
$("#hour10am .description").val(localStorage.getItem("hour10am"));
$("#hour11am .description").val(localStorage.getItem("hour11am"));
$("#hour12pm .description").val(localStorage.getItem("hour12pm"));
$("#hour13pm .description").val(localStorage.getItem("hour13pm"));
$("#hour14pm .description").val(localStorage.getItem("hour14pm"));
$("#hour15pm .description").val(localStorage.getItem("hour15pm"));
$("#hour16pm .description").val(localStorage.getItem("hour16pm"));
$("#hour17pm .description").val(localStorage.getItem("hour17pm"));

})
  