$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#1 .description").val(localStorage.getItem("1"));
  $("#2 .description").val(localStorage.getItem("2"));
  $("#3 .description").val(localStorage.getItem("3"));
  $("#4 .description").val(localStorage.getItem("4"));
  $("#5 .description").val(localStorage.getItem("5"));

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