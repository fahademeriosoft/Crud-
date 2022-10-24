var selectedtr = null;
var btn = document.querySelector(".button");
btn.addEventListener("click", addEmploy);
function addEmploy() {
    $("#button").text('Create');
  var transfer = readData();
  if (selectedtr == null) {
    insertData(transfer);
  } else {
    update(transfer);
    selectedtr = null;    
  }
  reset();
}

function readData() {
  var empy = {};
  empy["name"] = document.getElementById("name").value;
  empy["email"] = document.getElementById("email").value;
  empy["number"] = document.getElementById("number").value;
  console.log(empy);
  return empy;
}

function insertData(x) {
  console.log(x.name);
  var table = document.querySelector(".table");
  var tr = table.insertRow(table.length);
  var td1 = tr.insertCell(0);
  var td2 = tr.insertCell(1);
  var td3 = tr.insertCell(2);
  var td4 = tr.insertCell(3);
  var td5 = tr.insertCell(4);

  td1.innerHTML = table.rows.length - 2;
  td2.innerHTML = x.name;
  td3.innerHTML = x.email;
  td4.innerHTML = x.number;
  td5.innerHTML = `<a class="btn btn-success mx-2" onclick="edit(this)">Edit</a><a
     class="btn btn-danger" onclick="delte(this)">Delete</a>`;
}
function reset() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("number").value = "";
}

function edit(y) {
  selectedtr = y.parentElement.parentElement;
  document.getElementById("name").value = selectedtr.cells[1].innerHTML;
  document.getElementById("email").value = selectedtr.cells[2].innerHTML;
  document.getElementById("number").value = selectedtr.cells[3].innerHTML;
  $("#button").text('Edit');
}

function update(z) {
  selectedtr.cells[1].innerHTML = z.name;
  selectedtr.cells[2].innerHTML = z.email;
  selectedtr.cells[3].innerHTML = z.number;
  
}

function delte(dl) {
    var deleteRow = dl.parentElement.parentElement;
    deleteRow.remove();
}