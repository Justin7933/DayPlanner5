$(document).ready(function () {
    $(".saveBtn").on("click", function () {
      let value = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, value);
    });
  
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
  
    $("#currentDay").text(moment().format("MMMM Do YYYY"));
  
    let currentHour = moment().hours();
  
    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  });