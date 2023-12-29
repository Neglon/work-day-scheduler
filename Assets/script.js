//Jquery function holding all of the code to make sure that the page fully loads before executing everything within
$(function () {
  //gets the current time and then prints that to the html via jquery targetting the currentDay id
  var currentTime = dayjs().format('dddd, MMMM DD, YYYY');
  $('#currentDay').text(currentTime);

  //.each iterates the following function through every element with the time-block class
  $('.time-block').each(function() {
    /*variable to get the numercial hour out of each time-block, .split turns that id into an array using the - as the seperator
    The[1] calls the 2nd index in the array which would hold the number, and 10 is to make sure its parseInt out an integer up to a 2 digit number*/
    var blockHour = parseInt($(this).attr('id').split('-')[1], 10); 
    console.log(blockHour);
    var currentHour = dayjs().hour();
    console.log(currentHour)
    
    // Remove the class the time block may have  ***additional note  $(this) refers to the specific element that the .each is iterating through, saying THIS right here
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

  //iterate through each time block to get and display any saved infor in local storage
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var savedData = localStorage.getItem(timeBlockId);
    if (savedData) {
      $(this).find('.description').val(savedData);
    }
  });

  //jquery event listner for on click of a saveBtn
  $('.saveBtn').on('click', function() {
    // this specifically targets which button was clicked then finds the closest parent element with class time-block, sets that element to timeBlock
    var timeBlock = $(this).closest('.time-block'); // Traverse DOM to find the parent time block
    console.log(timeBlock);

    //variable that takes the id and gives that info to timeBlockID
    var timeBlockId = timeBlock.attr('id'); 

    //userInput will find the class description, and take the value with in it and apply that to the variable. Should be text that was entered in the textarea
    var userInput = timeBlock.find('.description').val(); 
    console.log(timeBlockId);
    console.log(userInput);

    // Saves the variable of timeBlockID as the key, and what the user typed in as the value, 
    localStorage.setItem(timeBlockId, userInput);
  });
});
