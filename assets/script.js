$(document).ready(function() {
  var todayDisplay = $("#todayTime");
  var currentTime = parseInt(dayjs().format("H"));
  var timeBlocks = $(".time-block");

  function updateCurrentDay() {
    var todayTime = dayjs().format("dddd, MMMM D YYYY, h:mm a");
    todayDisplay.text(todayTime);
  }

  function updateTime() {
    timeBlocks.each(function() {
      var id = parseInt($(this).attr("id").split("-")[1]); // Extract the hour from the ID
      // If statements to update times to past, current, or future
      if (id < currentTime) {
        $(this).addClass("past").removeClass("future present");
      } else if (id > currentTime) {
        $(this).addClass("future").removeClass("past present");
      } else {
        $(this).addClass("present").removeClass("past future");
      }
    });
  }

});


