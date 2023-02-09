var form = `<div>
  <div class="form-group">
    <label for="fname">fname</label>
    <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter Your fname">
  </div>
  <div class="form-group">
  <label for="lname">lname</label>
  <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" placeholder="Enter Your lname">
</div>
  <div class="form-group mt-3">
    <label for="email">email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your email">
    <div class="form-group">
    <label for="number">phno</label>
    <input type="number" class="form-control" id="number" aria-describedby="emailHelp" placeholder="Enter Your Number">
  </div>
    <label for="file">File</label>
    <input type="file" class="form-control" id="file" placeholder="Choose your file">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th>NO</th>
      <th>fname</th>
      <th>lname</th>
      <th>email</th>
      <th>phnO</th>
      <th>File</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].fname}</td>
      <td>${details[i].lname}</td>
      <td>${details[i].email}</td>
      <td>${details[i].number}</td>
      <td>${details[i].file}</td>

      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let file = document.getElementById("file");
    

    if (fname.value == 0) {
        alert("name is Empty");
        return
    }
    if (email.value == 0) {
      alert("email is Empty");
      return
  }
  if (file.value == 0) {
    alert("file is Empty");
    return
}
    let data = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        number: number.value,
        file:file.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    fname.value = "";
    lname.value = "";
    email.value = "";
    number.value = "";
    file.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)

};

function edit(index) {
    let editForm = `<div>
  <div class="form-group">
    <label for="fname">Update fName</label>
    <input type="text" value="${details[index].fname}" class="form-control" id="newfName" aria-describedby="emailHelp" placeholder="Update Your Name">
  </div>
  <div class="form-group">
  <label for="lname">Update lName</label>
  <input type="text" value="${details[index].lname}" class="form-control" id="newlName" aria-describedby="emailHelp" placeholder="Update Your Name">
</div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
  </div>
  <div class="form-group">
  <label for="phno">Update phno</label>
  <input type="number" value="${details[index].number}" class="form-control" id="number" aria-describedby="emailHelp" placeholder="Update Your phno">
</div>
  <div class="form-group mt-4">
  <label for="newFile">File</label>
  <input type="file" value="${details[index].file}" class="form-control" id="newFile" placeholder="Update Your file">
</div>
  <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
    // console.log('edit work');
    document.getElementById("edit").addEventListener(
      "click",
      () => {
        document.getElementById("file").hidden = true;
        document.getElementById("file").hidden = false;
      },
      false
    );
};

function update(index) {
    let newfName = document.getElementById('newfName');
    let newlName = document.getElementById('newlName');
    let newEmail = document.getElementById('newEmail');
    let number = document.getElementById('number');
    let newFile = document.getElementById('newFile');

    details[index] = {
        fname: newfName.value,
        lname: newlName.value,
        email: newEmail.value,
        number: number.value,
        file: newFile.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;
// console.log('update work')
// console.log(details)
}

