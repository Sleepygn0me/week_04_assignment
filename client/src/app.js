//todo: collect data form user amd send to server
//-select the html element with user's input
//select form from the DOM
const gamesForm = document.getElementById("games-form");

//add submit even to the DOM
gamesForm.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  //create a newtemplate object using form inputs
  const formData = new FormData(gamesForm);
  //fill the input data in the template object
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  // send the data to the server
  const response = await fetch(
    "https://week-04-assignment-zij1.onrender.com/add-games",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    }
  );
  const data = await response.json(); // parse JSON
  alert("Game added successfully!");
  gamesForm.reset(); // clear the form
}
//    -send data (JSON) to the server --> while in development the server url uses localhost, but when you finish deploying and your project is done you need to replace the localhost url with the server deployed url.

//todo: get database data from server
// -connect our client with the specific server route that GETs my data
// - in some sort of loop, create new HTML elements to display each piece of data and append to the DOM (look at the cookie clicker it will help )
const messageContainer = document.getElementById("messageContainer");
// Function to fetch and display all games
async function displayGames() {
  const response = await fetch(
    "https://week-04-assignment-zij1.onrender.com/games"
  );
  const games = await response.json();

  // Clear previous entries
  messageContainer.innerHTML = "";

  // Loop through each game and create HTML elements
  games.forEach((game) => {
    const gameMessage = document.createElement("div");
    gameMessage.classList.add("game-entry"); // optional class for styling
    gameMessage.innerHTML = `
        <h3><strong>${game.title}</strong> (${game.platform})</h3>
        <p><strong>By:</strong> ${game.name}</p>
        <p><strong>Message:</strong>${game.message}</p>
        <hr>
      `;
    messageContainer.appendChild(gameMessage);
  });
}

// Also refresh the list after a new game is added
gamesForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(gamesForm);
  const formValues = Object.fromEntries(formData);

  const response = await fetch(
    "https://week-04-assignment-zij1.onrender.com/add-games",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    }
  );
  displayGames(); // refresh the list after adding
});
displayGames();
