let insert = document.getElementById("insert");

window.addEventListener("keydown", function (key) {
  insert.innerHTML = `
    <table border="1">
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${key.key === " " ? "space" : key.key}</td>
    <td>${key.keyCode}</td>
    <td>${key.code}</td>
  </tr>
</table>`;
});
