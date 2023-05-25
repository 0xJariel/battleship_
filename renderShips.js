export const renderShips = (shipList) => {
  const shipContainer = document.createElement("div");
  shipContainer.classList.add("ship-container");
  app.appendChild(shipContainer);

  shipList.forEach((displayShip) => {
    // event.dataTransfer.setData("text/plain", "Hello, World!");

    let newShipRender = document.createElement("div");
    newShipRender.classList.add("ship", displayShip.name);
    newShipRender.dataset.ship_size = displayShip.size;
    newShipRender.setAttribute("draggable", "true");
    newShipRender.style.width = `${35 * displayShip.size}px`;
    newShipRender.style.height = "35px";

    newShipRender.addEventListener("dragstart", (e) => {
      const data = { name: displayShip.name, size: displayShip.size };
      const dataString = JSON.stringify(data);
      e.dataTransfer.setData("application/json", dataString);
    });

    shipContainer.appendChild(newShipRender);
  });
};
