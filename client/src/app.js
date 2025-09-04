//todo: collect data form user amd send to server
//-select the html element with user's input
//select form from the DOM
const gamesForm = document.getElementById("games-form");

//add submit even to the DOM
gamesForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //create a newtemplate object using form inputs
  const formData = new FormData(gamesForm);
  //fill the input data in the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  // send the data to the server
  fetch("http://localhost:8080/add-games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}
//    -send data (JSON) to the server --> while in development the server url uses localhost, but when you finish deploying and your project is done you need to replace the localhost url with the server deployed url.

//todo: get database data from server
// -connect our client with the specific server route that GETs my data
// - in some sort of loop, create new HTML elements to display each piece of data and append to the DOM (look at the cookie clicker it will help )
