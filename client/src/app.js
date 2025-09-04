//todo: collect data form user amd send to server
//-select the html element with user's input
//select form from the DOM
const gamesForm = document.getElementById("games-form");

//add submit even to the DOM
gamesForm.addEventListener("submit", handleSubmit);

//-add and event to this html element

//-the event handler has the following steps:
//    -prevent default behaviour of the even
//    -create template for the userser data
//    - fill in the template with usere;s data
//    -send data (JSON) to the server --> while in development the server url uses localhost, but when you finish deploying and your project is don you need to replace the localhost url with the server deployed url.

//todo: get database data from server
// -connect our client with the specific server route that GETs my data
// - in some sort of loop, create new HTML elements to display each piece of data and append to the DOM (look at the cookie clicker it will help )
