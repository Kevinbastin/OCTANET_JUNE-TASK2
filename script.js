document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;
    const label = document.getElementById('label').value;

    if (taskInput.trim() === '') {
        alert('Task cannot be empty');
        return;
    }

    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskInput} (Priority: ${priority}, Due: ${dueDate}, Label: ${label})</span>
        <div>
            <button class="complete" onclick="completeTask(this)">
                <img src="images/tick.png" alt="Complete Task">
            </button>
            <button class="delete" onclick="deleteTask(this)">
                <img src="images/bin.jpg" alt="Delete Task">
            </button>
        </div>
    `;

    taskList.appendChild(taskItem);
    clearInputs();
}

function clearInputs() {
    document.getElementById('taskInput').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('dueDate').value = '';
    document.getElementById('label').value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}
