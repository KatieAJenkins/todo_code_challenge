# todo_code_challenge

###Problem 1
<p>I was able to build out the base of the webpage using Bootstrap's grid system and several built in styling features for the form
  and button. I built out the table for the to do list as well. I was working on jQuery functionality to capture the input fields into an object
  on submit and append the object as a row to the table. Each item would also have a completed checkbox next to it. Once the checkbox was clicked, 
  the item would be removed from the list. I would then test the full site's functionality by adding additional list items and checking them off as 
  complete. My final step would be styling this tool to have a more inviting look and feel with colors, font, and perhaps some animated
  user interactions.</p>
  
###Problem 2
Please explain the difference between the following jQuery functions. What impact has or will this have on code you’ve written?

1. $(“.todo-item”).on(“click”, function(e){ console.log(e) });

<p>This jQuery statement is selecting the todo-item class which is more than likely targeting an item so that we can place an
  event handler on that target to handle what happens when the user clicks on it. In this case, the user will click and the event
  will be logged in the console. This is how I would target an item I would want the user to interact with and fire a function.</p>

2. $(document).on(“click”, “.todo-item”, function(e){ console.log(e) });

<p>This jQuery statement adds a "click" event handler to the entire document on load. What this means to me is that the user
  would be able to click on the entire window document (or web page) once the page has loaded to fire the event. The event
  will then be logged in the console. This impacts my code as the whole page would be able to be clicked to fire an event,
  and not only a specific button or target.</p>
  
###Problem 3
<p>Please see **calculator.js** for Calculator. I would add additional error checking to each function to make sure the 
  numbers were what we were expecting (ex. NaN, undefined, etc) but for time's sake, I added a check for null values in divide.</p>

Thank you for this fun opportunity to crush code!
