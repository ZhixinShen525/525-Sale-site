document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById("cta");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("You clicked the button! 🎉 Now edit script.js to add your own features.");
    });
  }
});
