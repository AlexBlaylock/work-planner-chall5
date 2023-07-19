var todayDisplay = $("#todayTime");

function dayTimer() {
  var todayTime = dayjs().format("dddd, MMMM D YYYY, h:mm a");
  todayDisplay.text(todayTime);
// setting interval to update every minute
  setInterval(dayTimer, 60000);
};
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 
});

// save btn event

$(".saveBtn").click(function(event) {
  event.preventDefault();

  var elementSaver = $(this).siblings("textarea")
  var hourSave = elementSaver.attr("id");
  console.log(hourSave)
  var textSave = elementSaver.val();
  console.log(textSave)
  // local storage save
  if (hourSave && text !== "") {
    console.log(hourSave, textSave);
    localStorage.setItem(hourSave, textSave)
  }
})
// loads timer on page start
dayTimer();