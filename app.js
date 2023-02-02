const seats = document.querySelectorAll(".fa-solid.fa-couch");
for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (this.style.color === "") {
      this.style.color = "green";
      console.log(this.id);
    } else {
      this.style.color = "";
    }
  });
}

// this.style.pointerEvents = 'none';
