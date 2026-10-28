const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;
    span.onclick = function () {
        span.classList.toggle('completed');
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

addBtn.onclick = addTask;

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
