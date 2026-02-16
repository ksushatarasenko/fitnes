document.getElementById("search").addEventListener("input", function () {
  const filter = this.value.toLowerCase();

  // все таблицы на странице
  const tables = document.querySelectorAll("table");

  tables.forEach(table => {
    const rows = table.querySelectorAll("tr");

    rows.forEach((row, index) => {
      if (index === 0) return; // пропуск заголовка

      const cell = row.querySelector("td");
      if (!cell) return;

      const text = cell.textContent.toLowerCase();

      row.style.display = text.includes(filter) ? "" : "none";
    });
  });
});
