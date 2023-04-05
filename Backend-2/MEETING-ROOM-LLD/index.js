class Slot {
  #slot;
  constructor(start, end) {
    this.#slot = [start, end];
  }

  get start() {
    return this.#slot[0];
  }

  get end() {
    return this.#slot[1];
  }
}

class Slots {
  #slots;
  #availableSlots;
  constructor() {
    this.#slots = [];
    this.#availableSlots = [];
  }
  get slots() {
    return this.#slots;
  }
  add(slot) {
    console.log(slot);
    if (this.isAvailable(slot.start, slot.end)) {
      this.#slots.push(slot);
    }
  }

  isAvailable(start, end) {
    for (let slot of this.#slots) {
      if (start < slot.end && end > slot.start) {
        return false;
      }
    }
    return true;
  }

  get size() {
    return this.#slots.length;
  }

  slotsList() {
    for (let slot of this.#slots) {
      console.log(`slot Start ${slot.start} , slot End ${slot.end} `);
    }
  }
  setAvailableSlots() {}
}

// let s1 = new Slot(1, 2);
// let s2 = new Slot(3, 4);
// // console.log(s1.start);
// const SL = new Slots();
// SL.add(s1);
// SL.add(s2);

// console.log(SL.slots);

class MeetingRoom {
  #name;
  #capacity;
  #slots;
  #availableSlots;

  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
    this.#slots = new Slots();
    this.#availableSlots = [];
  }

  get name() {
    return this.#name;
  }

  get capacity() {
    return this.#capacity;
  }
  get slot() {
    return this.#slots.slots;
  }

  addSlot(slot) {
    this.#slots.add(slot);
  }

  get availableSlots() {
    return this.#availableSlots;
  }

  get slots() {
    return this.#slot;
  }

  setAvailableSlots(slots) {
    this.#availableSlots = [];
    if (this.#slots.size === 0) {
      this.#availableSlots.push([1, 24]);
      return;
    }
    let start = 1;
    for (let slot of this.#slots.slots) {
      if (slot.start <= start) {
        start = slot.end;
        continue;
      }
      this.#availableSlots.push([start, end]);
      start = slot.end;
    }
    if (start < 24) {
      this.#availableSlots.push([start, 24]);
    }
  }
}

// let m1 = new MeetingRoom("M1", 30);
// let s1 = new Slot(1, 2);
// let s2 = new Slot(2, 3);
// m1.addSlot(s1);
// m1.addSlot(s2);
// console.log(m1.capacity);

class Floor {
  #name;
  #meetingRoom;
  constructor(name) {
    this.#name = name;
    this.#meetingRoom = [];
  }

  get name() {
    return this.#name;
  }

  addMeetingRoom(meetingRoom) {
    if (!this.doesExist(meetingRoom)) {
      this.#meetingRoom.push(meetingRoom);
    }
  }

  doesExist(meetingRoom) {
    return this.meetingRoom.some((ele) => ele.name === meetingRoom.name);
  }
}

class Building {
  #name;
  #floors;
  constructor(name) {
    this.#name = name;
    this.#floors = [];
  }

  addFloor(floor) {
    if (!doesFloorExist) {
      this.#floors.push(floor);
    }
  }

  doesFloorExist(floor) {
    this.#floors.some((ele) => ele.name === floor.name);
  }

  get name() {
    return this.#name;
  }

  get totalFloors() {
    return this.#floors.length;
  }

  floorDetails(name) {
    return this.#floors.find((ele) => ele.name === name);
  }
}
