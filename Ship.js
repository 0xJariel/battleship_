export const Ship = (a, b) => {
  let name = a;
  let size = b;
  let hits = 0;
  let coordinates = [];

  const isSunk = () => {
    hits >= size ? true : false;
  };

  const hit = () => {
    hits += 1;
    return hits;
  };

  return { name, size, isSunk, hit, hits, coordinates };
};
