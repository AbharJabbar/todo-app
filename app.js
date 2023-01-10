// ----------------------------
let tasks = [];

const inputField = document.querySelector("#input-field");
console.log(inputField.value);
const taskList = document.querySelector("#task-list");
let updateButton = document.getElementById("update-button");
console.log(updateButton);
addButton = () => {
  const task = inputField.value;
  tasks.push(task);
  makeList();
  inputField.value = "";
};

const update = (tasks, index, updatedTask) => {
  tasks[index] = updatedTask;
  makeList();
};

updateButton.onclick = () => {
  const newTask = inputField.value;
  update(tasks, index, newTask);
  inputField.value = "";
  updateButton.style.display = "none";
  document.getElementById("add-button").style.display = "inline";
};

const makeList = () => {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      ${tasks[i]} 
      
      <button class="delete-button" data-index="${i}">Delete</button>
      <button class="edit-button" data-index="${i}">Edit</button>
      
    `;
    taskList.appendChild(li);
  }

  const deleteButtons = document.querySelectorAll(".delete-button");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = () => {
      const index = i;
      tasks.splice(index, 1);
      makeList();
    };
  }

  const editButtons = document.querySelectorAll(".edit-button");
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].onclick = () => {
      index = i;
      const task = tasks[index];
      // const newTask = prompt("Enter the new value for the task:", task);
      inputField.value = task;
      updateButton.classList.remove("updatebtn");
      document.getElementById("add-button").style.display = "none";
      updateButton.style.display = "inline";
    };
  }
};
