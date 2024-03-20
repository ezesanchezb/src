const tasks = document.querySelector('.tasks');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
  const newTask = document.createElement('li');
  newTask.classList.add('task');

  const newTaskCheckbox = document.createElement('input');
  newTaskCheckbox.type = 'checkbox';
  newTaskCheckbox.id = `task${tasks.children.length + 1}`;

  const newTaskLabel = document.createElement('label');
  newTaskLabel.for = newTaskCheckbox.id;
  newTaskLabel.textContent = 'Nueva tarea';

  newTask.appendChild(newTaskCheckbox);
  newTask.appendChild(newTaskLabel);

  tasks.appendChild(newTask);
});
