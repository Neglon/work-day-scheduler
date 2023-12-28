// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  


});

$(function () {
  //gets the current time and then prints that to the html via jquery targetting the currentDay id
  var currentTime = dayjs().format('dddd, MMMM DD, YYYY');
  $('#currentDay').text(currentTime);




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?




  
  //.each iterates the following function over every element with the time-block class
  $('.time-block').each(function() {
    /*variable to get the numercial hour out of each time-block, .split turns that id into an array using the - as the seperator
    The[1] calls the 2nd index in the array which would hold the number, and 10 is to make sure its parseInt out an integer up to a 2 digit number*/
    var blockHour = parseInt($(this).attr('id').split('-')[1], 10); 
    console.log(blockHour);
    var currentHour = dayjs().hour();
    console.log(currentHour)
    
    // Remove the class the time block may have       additional note  $(this) refers to the specific element that the .each is iterating through, saying THIS right here
    $(this).removeClass('past present future');

    // Check to see if the time block is befor during or after the current time and set the appropriate class
    if (blockHour < currentHour) {
        $(this).addClass('past');
    } else if (blockHour === currentHour) {
        $(this).addClass('present');
    } else {
        $(this).addClass('future');
    }
  });




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
