document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value.trim();

        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔';
        completeBtn.onclick = function() {
            li.classList.toggle('completed');
        };

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a task!");
    }
});