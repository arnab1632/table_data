var modal = document.getElementById("add_user");
var form = document.getElementById("form");
var table = document.getElementById("table");
var nameData = document.getElementById("name");
var emailData = document.getElementById("email");
var phoneData = document.getElementById("phone");
var roleData = document.getElementById("role");
var rIndex;

function addTableRow() {
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  cell1.innerHTML = nameData.value;
  cell2.innerHTML = emailData.value;
  cell3.innerHTML = phoneData.value;
  cell4.innerHTML = Math.floor(Math.random() * 10);
  cell5.innerHTML = Math.floor(Math.random() * 10);
  cell6.innerHTML = "Active";
  cell7.innerHTML = roleData.value;
  cell8.innerHTML = `<a class="delete-user-btn" onclick="deleteSelectedRow(this);"><i class="fas fa-trash-alt fa-customize"></i></a>
                     <a class="edit-user-btn" data-toggle="modal" data-target="#edit_user" data-backdrop="static"><i class="fas fa-edit fa-customize1"></i></a>`;
  form.reset();
  document.getElementById('close-add-user-modal').click();
  selectRow();
}

function selectRow(){
  for(var i = 1; i < table.rows.length; i++){
     table.rows[i].onclick = function(){
      rIndex = this.rowIndex;
      document.getElementById("edit-name").value = this.cells[0].innerHTML;
      document.getElementById("edit-email").value = this.cells[1].innerHTML;
      document.getElementById("edit-phone").value = this.cells[2].innerHTML;
      document.getElementById("edit-role").value = this.cells[6].innerHTML;
    };
  }
}
selectRow();

function updateRow(){
  var editName = document.getElementById("edit-name").value;
  var editEmail = document.getElementById("edit-email").value;
  var editPhone = document.getElementById("edit-phone").value;
  var editRole = document.getElementById("edit-role").value;

  table.rows[rIndex].cells[0].innerHTML = editName;
  table.rows[rIndex].cells[1].innerHTML = editEmail;
  table.rows[rIndex].cells[2].innerHTML = editPhone;
  table.rows[rIndex].cells[6].innerHTML = editRole;

  document.getElementById('close-update-user-modal').click();
}

function deleteSelectedRow(btn){
  var row = btn.parentNode.parentNode.rowIndex;
  var msg = confirm("Do you want to delete this row?");
  
  if (msg == true) {
    table.deleteRow(row);
  }
  
}