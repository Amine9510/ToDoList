document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Supprimer';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });

            listItem.appendChild(deleteBtn);
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    });
});
