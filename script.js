const button = document.getElementById("button");
button.addEventListener("click", generateTable);

function generateTable() {
  const rows = document.getElementById("rows").value;
  const cols = document.getElementById("cols").value;

    let table = "<table>";
    for (let row = 0; row < rows; row++){
      table += "<tr>";
      for (let col = 0; col < cols; col++){
      table += `<td>${row}, ${col}</td>`;
      }
      table += "<tr>";
    }
    document.getElementById("table").innerHTML = table;
}
