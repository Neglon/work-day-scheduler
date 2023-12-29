# <Workday Scheduler>

## Description
    - A client requested a website that could be used as a planner for the work day, that will display any saved plans, and let the user know if that time has past, is current, or still in the future
    - This project was built to allow users to keep track of a schedule for an 8 hour work day.
    - This project was able to solve how to input a plan into a specific time block, save that plan to local storage, to make sure it is always displayed even if the page is refreshed. It also solves how to display the current date, and adjusts the time blocks background color based on if the time has already past, if it is the current hour, or if the blocks are still in the futrue.
    - I learned how to use the THIS attribute to target what was in the specific element of said target, such as the specific save button for a time block. I learned how to use dayjs, to access the time and then subsequently display that time. I also learned about using jquery for dom traversal, and in doing so it reduces the lines of code necessary to make that possible.
    

## Installation
    Web Page is in the link below
[Code Quiz](https://neglon.github.io/coding-quiz/)

## Usage
    Upon visiting the page, you will be presented with the current date, and below that time blocks for every hour from 9am through 5pm, with each having a save button. Each block is a text input area where the user can enter information and click the save button to log that input into local storage. The page then maintains the input on the page even if the page is refreshed. Depending on the time of day the time blocks will either have a grey background to let the user know that that time has already passed, a red background for a time block if that is the current hour of the day, or a green background for future hours still yet to come.
   
![Screenshots of top half of scheduler](assets/images/top.PNG)
   
![Screenshots of bottom half of scheduler](assets/images/bottom.PNG)



## Credits
    N/A

## Liscence
    N/A

## Code Source
    Code fully written by Thomas Neylon, references were made to previous classwork, Jquery.com , w3 schools, and stack overflow.

[Jquery .each](https://api.jquery.com/each/)
    
[Jquery .attr](https://api.jquery.com/attr/#attr-attributeName)
    
[Jquery find](https://api.jquery.com/find/#find-element)

[W3 Schools Array splitting](https://www.w3schools.com/jsref/jsref_split.asp)

[Parseint info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

[Stack overflow](https://stackoverflow.com/questions/76111963/set-hour-to-timeblock-element-using-dayjs-hour#:~:text=the%20current%20timestamp.-,dayjs().,hour%20value%20of%20the%20object.)

[Jquery click listener](https://api.jquery.com/click/)


