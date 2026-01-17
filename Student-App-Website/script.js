let nameInput = document.getElementById("name");
let marksInput = document.getElementById("marks");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("studentList");
let totalSpan = document.getElementById("total");
let percentSpan = document.getElementById("percent");

let totalMarks = 0;
let count = 0;

addBtn.addEventListener("click", function () {
  let name = nameInput.value;
  let marks = Number(marksInput.value);

  // validation
  if (name === "" || marks === "" || marks < 0 || marks > 100) {
    alert("Please enter valid data");
    return;
  }

  // create list item
  let li = document.createElement("li");
  li.innerHTML = `${name} - ${marks} <span class="delete">X</span>`;

  list.appendChild(li);

  // calculations
  totalMarks += marks;
  count++;

  totalSpan.innerText = totalMarks;
  percentSpan.innerText = ((totalMarks / (count * 100)) * 100).toFixed(2);

  // delete logic
  li.querySelector(".delete").addEventListener("click", function () {
    totalMarks -= marks;
    count--;

    totalSpan.innerText = totalMarks;
    percentSpan.innerText =
      count === 0 ? 0 : ((totalMarks / (count * 100)) * 100).toFixed(2);

    li.remove();
  });

  // clear input
  nameInput.value = "";
  marksInput.value = "";
});