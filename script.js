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
    { name: "CURRYWURST" },
    { name: "Entschuldigung, dass ich reinquatsche…" },
    { name: "Ernst erklärt etwas in Bildern" },
    { name: "Katze von Ernst" },
    // "Ich habe eine Frage",
    // "Currywurst",
    // "Brokkoli",
    // "Mächtig",
    // "Hallo",
    // "du da",
    // "bla",
  ];

  const grid = document.querySelector(".grid");

  //create a Board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let fieldPiece = document.createElement("div");
      let text = document.createElement("p");
      text.setAttribute("data-js", "text" + i);
      grid.appendChild(fieldPiece);
      fieldPiece.appendChild(text);
      const number = Math.round(Math.random() * 15);
      text.textContent = cardArray[number].name;
      console.log(number);
      // const textChosen = cardArray[i].name;
      // text.textContent = textChosen;
      // cardArray.splice(textChosen);
    }
    // cardArray.splice(i);
  }
  createBoard();
}});
