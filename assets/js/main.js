console.log("text");

let navMobile = document.getElementById("navMobile");

function openMenu() {
  navMobile.style.transform = "translateY(0%)";
}

function closeMenu() {
  navMobile.style.transform = "translateY(-100%)";
}
