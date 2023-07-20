var todayDisplay = $("#todayTime");
// reads hour so currenttime can tell what hour it is
var currentTime = parseInt(dayjs().format("H"));


  var todayTime = dayjs().format("dddd, MMMM D YYYY, h:mm a");
  todayDisplay.text(todayTime);
  
  updateTime();
// setting interval to update every minute
  setInterval(dayTimer, 60000);
  
};

// loads saved data
function loadSavedEvents() {
  timeSlots.forEach((element) => {
    var text = localStorage.getItem(parseInt(element.hourSave))
    // saying if there was text in the text saved in local storage, load it
    if (text) {
      element.text.val(text)
    }
  })
}
 
function fetchTimeSlots() {
  // empty array to store time and text
  var timeSlotsArray = [];
  $("textarea").each(function(){
    timeSlotsArray.push({
      time: $(this).attr("id"),
      text: $(this),
    })
  })
}

function updateTime() {
$("textarea").each(function () {
  var id = parseInt($(this).attr("id"));
  // if statements to update times to past current or future
  if (id < currentTime) {
    $(this).addClass("past")
  } else if (hour > currentTime){
   $(this).addClass("future");
  } else {
    $(this).addClass("present");
  }
})
};
// save btn event

$(".saveBtn").click(function(event) {
  event.preventDefault();

  var elementSaver = $(this).siblings("textarea")
  // get id of time
  var time = elementSaver.attr("id");
  console.log(time)
  // get id of text
  var text = elementSaver.val();
  // logs text to see it's working properly
  console.log(text)
  // if statement to save to local storage
  if (time && text !== "") {
    console.log(time, text);
    localStorage.setItem(time, text)
  }
})
// loads timer on page start
dayTimer();