const seats = document.querySelectorAll(".fa-solid.fa-couch");
const chosenSeat = [];

for (const seat of seats) {
  seat.addEventListener("click", function () {
    console.log("start " + this.style.color + this.id);
    if (this.style.color === "") {
      this.style.color = "green";
      console.log(this.id);
      if (!chosenSeat.includes(this.id)) {
        chosenSeat.push(this.id);
        console.log(chosenSeat);
      }
    } else {
      chosenSeat.splice(this.id);
      this.style.color = "";
      console.log(chosenSeat);
    }
  });
}

const reserveButton = document.querySelector("#reserveButton");
reserveButton.addEventListener("click", function () {
  console.log("ara beni");
});
// this.style.pointerEvents = 'none';
