let restaurant = {
  name: "Cloud9",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    return (this.guestCapacity - this.guestCount) >= partySize;
  },
  seatParty: function (partySize) {
    if (this.checkAvailability(partySize)) {
      this.guestCount += partySize;
    }
  },
  removeParty: function (partySize) {
    this.guestCount -= partySize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
console.log(restaurant);
