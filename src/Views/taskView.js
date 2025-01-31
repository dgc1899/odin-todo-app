class TaskView {
    constructor() {
        const taskListElement = document.createElement("li");
        const taskCheckBox = document.createElement("input");
        const taskDescription = document.createElement("a");
    }

    renderTask(task) {
        taskDescription.innerHTML = task.description;
        taskDescription.classList.add("taskLink");
        taskDescription.href = "#";

        taskCheckBox.type = "checkbox";
        taskCheckBox.checked = task.done;
        taskCheckBox.classList.add("taskCheck");
        taskCheckBox.id = task.Id;

        taskListElement.appendChild(taskCheckBox);
        taskListElement.appendChild(taskDescription);

        setEventListeners(task);

        return taskListElement;
    }

    setEventListeners(task) {
        taskCheckBox.addEventListener("click", task.setDone(taskCheckBox.checked));
    }
}