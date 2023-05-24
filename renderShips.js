// import { Ship } from "./Ship";

// export const renderShips = (() => {
//   const aircraftCarrier = Ship("aircraftCarrier", 5);
//   const destroyer = Ship("destroyer", 4);
//   const submarine = Ship("submarine", 3);
//   const cruiser = Ship("cruiser", 2);
//   const shipList = [aircraftCarrier, destroyer, submarine, cruiser];

//   const node = document.querySelector(".ship-container");

//   shipList.forEach((ship) => {
//     let shipElement = document.createElement("div");
//     shipElement.style.width = `${ship.length * 35}px`;
//     shipElement.classList.add(`${ship.name}`);
//     shipElement.classList.add("dragShip");
//     shipElement.setAttribute("draggable", "true");
//     node.appendChild(shipElement);
//   });
// })();
