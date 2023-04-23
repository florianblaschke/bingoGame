document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "Ich habe eine Frage" },
    { name: "Jemand erwähnt Kinder" },
    { name: "Frage, die an Franz gehen sollte" },
    { name: "Nicole stellt eine Frage" },
    { name: "Alexandra stellt eine Frage" },
    { name: "MÄCHTIG" },
    { name: "Irgendwas mit GitHub" },
    { name: "Jemand redet muted" },
    { name: "Kann man meinen Bildschirm sehen?" },
    { name: "Kind zu sehen" },
    { name: "Ulrike liegt richtig" },
    { name: "BROKKOLI" },
    { name: "Frage nach Short-Cut" },
    { name: "Entschuldigung, dass ich reinquatsche…" },
    { name: "Erst erklärt etwas in Bildern" },
    { name: "Katze von Ernst" },
  ];

  const grid = document.querySelector(".grid");

  //create a Board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let fieldPiece = document.createElement("div");
      let text = document.createElement("p");
      // fieldPiece.setAttribute("class", "div");
      // text.setAttribute("data-id");
      grid.appendChild(fieldPiece);
      fieldPiece.appendChild(text);
      text.innerText = cardArray[1].name;
    }
  createBoard();
});
