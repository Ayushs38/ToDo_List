const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span class="task-text">${task}</span>
      <span class="edit-task">✏️</span>
      <span class="delete-task">❌</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    setTaskListeners();
  }
}

// Function to remove a task
function removeTask() {
  const listItem = this.parentElement;
  listItem.remove();
}

// Function to edit a task
function editTask() {
  const listItem = this.parentElement;
  const taskText = listItem.querySelector('.task-text');
  const newText = prompt('Edit Task:', taskText.innerText);
  if (newText !== null && newText.trim() !== '') {
    taskText.innerText = newText.trim();
  }
}

// Function to complete a task
function completeTask() {
  const listItem = this.parentElement;
  listItem.classList.add('completed');
  setTimeout(() => {
    listItem.style.display = 'none';
  }, 500); // Delay hiding the task for 500 milliseconds
}

// Set event listeners for tasks
function setTaskListeners() {
  const deleteButtons = document.getElementsByClassName('delete-task');
  const editButtons = document.getElementsByClassName('edit-task');
  const checkboxes = document.getElementsByClassName('task-checkbox');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', removeTask);
    editButtons[i].addEventListener('click', editTask);
    checkboxes[i].addEventListener('change', completeTask);
  }
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Initialize task listeners
setTaskListeners();
