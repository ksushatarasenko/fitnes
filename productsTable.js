document.getElementById("search").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#productsTable tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // пропуск заголовка

    const cell = row.querySelector("td");
    const text = cell.textContent.toLowerCase();

    row.style.display = text.includes(filter) ? "" : "none";
  });
});
