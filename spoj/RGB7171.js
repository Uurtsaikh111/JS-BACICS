function findApart(a, b, c) {
  let porch = 0;
  if (a >= 1 && a <= 20) porch = porch + 1;
  if (a >= 21 && a <= 40) porch = porch + 2;
  if (a >= 41 && a <= 60) porch = porch + 3;

  let room = 0;
  if (a % c == 0) room = room + 4;
  if (a % c == 1) room = room + 1;
  if (a % c == 2) room = room + 2;
  if (a % c == 3) room = room + 3;

  let floor = 0;
  if ((a >= 1 && a <= 4) || (a >= 21 && a <= 24)) floor = 1 + floor;
  if ((a >= 5 && a <= 8) || (a >= 25 && a <= 28)) floor = 2 + floor;
  if ((a >= 9 && a <= 12) || (a >= 29 && a <= 32)) floor = 3 + floor;
  if (a >= 13 && a <= 16) floor = 4 + floor;
  if (a >= 17 && a <= 20) floor = 5 + floor;

  console.log(porch, floor, room);
}
findApart(32, 3, 4);
