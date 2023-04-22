document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Ernst", img: "./images/ernst.jpg" },
    { name: "Hello" },
    { name: "bye" },
  ];

  const grid = document.querySelector(".grid");
  console.log(cardArray);

  //create a Board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/ernst.jpg");
      // card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }
  createBoard();
});
