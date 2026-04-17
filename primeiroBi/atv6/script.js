const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

// Delegação de eventos para checkbox e remoção
taskList.addEventListener('click', (e) => {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;

    if (e.target.classList.contains('task-checkbox')) {
        taskItem.classList.toggle('completed');
    } else if (e.target.classList.contains('task-delete')) {
        taskItem.remove();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Digite uma tarefa!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'task-delete';
    deleteBtn.textContent = 'Delete';

    taskItem.appendChild(checkbox);
    taskItem.appendChild(text);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
}
