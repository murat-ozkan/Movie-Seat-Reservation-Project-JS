const seats = document.querySelectorAll(".fa-solid.fa-couch");
let emptySeat = document.getElementById("emptySeat");
let chosenSeats = document.getElementById("chosenSeats");
let chosenSeats2 = document.getElementById("chosenSeats-2");
let ticketPrice = 9;
let totalPrice = document.getElementById("totalPrice");
let chosenSeatList = [];
let reservedSeatList = [];

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (this.style.color === "gray") {
      this.style.color = "green";
      console.log(this.id);
      if (!chosenSeatList.includes(this.id)) {
        chosenSeatList.push(this.id);
        chosenSeats.innerText = chosenSeatList.length;
        chosenSeats2.innerText = chosenSeatList.length;
        totalPrice.innerText = chosenSeats.innerText * ticketPrice;
      }
    } else {
      this.style.color = "gray";
      chosenSeatList = chosenSeatList.filter((seatId) => seatId !== this.id); //! chosenSeatList.splice(this.id) olmadı nedense....
      chosenSeats.innerText = chosenSeatList.length;
      chosenSeats2.innerText = chosenSeatList.length;
      totalPrice.innerText = chosenSeats.innerText * ticketPrice;
    }
  });
}

const reserveButton = document.querySelector("#reserveButton");
reserveButton.addEventListener("click", function () {
  console.log("ara beni");
  for (seat of chosenSeatList) {
    document.getElementById(seat).style.pointerEvents = "none";
    document.getElementById(seat).style.color = "black";
  }
});
