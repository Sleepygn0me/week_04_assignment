//todo: collect data form user amd send to server
//-select the html element with user's input
//select form from the DOM
const gamesForm = document.getElementById("games-form");

//add submit even to the DOM
gamesForm.addEventListener("submit", async (event) => {
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formValues }),
    }
  );

  const data = await response.json(); // parse JSON
  alert("Game added successfully!");
  gamesForm.reset();
  displayGames(); // clear the form
});

//display message
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

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", async () => {
      await fetch(
        `https://week-04-assignment-zij1.onrender.com/games/${game.id}`,
        { method: "DELETE" }
      );
      const data = await deleteResponse.json();
      alert(data.message || "Entry deleted successfully");
      displayGames();
    });
    gameMessage.appendChild(deleteButton);
    messageContainer.appendChild(gameMessage);
  });
}

// Also refresh the list after a new game is added

displayGames();
