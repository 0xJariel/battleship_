export const renderTiles = (board) => {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  app.appendChild(boardContainer);

  board.forEach((e) => {
    const tile = document.createElement("div");
    tile.dataset.x = e.x;
    tile.dataset.y = e.y;
    tile.classList.add("tile");
    tile.classList.add(e.fill);

    boardContainer.appendChild(tile);

    tile.addEventListener("dragover", dragOverHandler);
    tile.addEventListener("drop", dropHandler);

    function dragOverHandler(event) {
      event.preventDefault();
    }

    function dropHandler(event) {
      event.preventDefault();
      const droppedDataString = event.dataTransfer.getData("application/json");
      const droppedData = JSON.parse(droppedDataString);
      console.log(
        "Dropped data:",
        droppedData,
        event.target.dataset.x,
        event.target.dataset.y
      );
    }
  });
};
