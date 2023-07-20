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
  function loadSavedEvents() {
    timeSlots.forEach((element) => {
      var text = localStorage.getItem(parseInt(element.hourSave));
      // Check if there was text in the textarea saved in local storage, and load it
      if (text) {
        element.text.val(text);
      }
    });
  }

  function fetchTimeSlots() {
    // empty array to store time and text
    var timeSlotsArray = [];
    $("textarea").each(function() {
      timeSlotsArray.push({
        time: $(this).attr("id"),
        text: $(this),
      });
    });
    loadSavedEvents(timeSlotsArray);
  }

  setInterval(function() {
    currentTime = parseInt(dayjs().format("H"));
    updateTime();
  }, 60000);

  // save btn event
  $(".saveBtn").click(function(event) {
    event.preventDefault();

    var elementSaver = $(this).siblings("textarea");
    // get id of time
    var time = elementSaver.attr("id");
    console.log(time);
    // get id of text
    var text = elementSaver.val();
    // logs text to see it's working properly
    console.log(text);
    // if statement to save to local storage
    if (time && text !== "") {
      console.log(time, text);
      localStorage.setItem(time, text);
    }
  });

  // loads on page start
  loadSavedEvents();
  updateCurrentDay();
  fetchTimeSlots();
});



