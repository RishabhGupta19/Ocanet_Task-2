document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTask);

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('dblclick', editTask);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', editTask);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
}

function toggleTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}

function editTask(event) {
    const taskContent = event.target.tagName === 'SPAN' ? event.target : event.target.previousElementSibling;
    const newTaskText = prompt('Edit your task', taskContent.textContent);
    if (newTaskText !== null) {
        taskContent.textContent = newTaskText;
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
}
