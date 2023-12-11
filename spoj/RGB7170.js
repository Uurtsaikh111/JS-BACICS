function findDoor(b, c) {
  let room = 0;
  if (c % b == 0) room = room + 4;
  if (c % b == 1) room = room + 1;
  if (c % b == 2) room = room + 2;
  if (c % b == 3) room = room + 3;

  let floor = 0;
  if (c >= 1 && c <= 4) floor = 1 + floor;
  if (c >= 5 && c <= 8) floor = 2 + floor;
  if (c >= 9 && c <= 12) floor = 3 + floor;
  if (c >= 13 && c <= 16) floor = 4 + floor;
  if (c >= 17 && c <= 20) floor = 5 + floor;

  console.log(floor, room);
}
findDoor(4, 20);
