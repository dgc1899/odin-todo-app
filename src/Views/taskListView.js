class TaskListView {
    constructor() {
        const divContentHeader = document.createElement("div");
        const headerListName = document.createElement("h1");
        const buttonAddTask = document.createElement("button");
        const paraDescription = document.createElement("p");

        const listTasks = document.createElement("ul");

        buttonAddTask.addEventListener("click", this.createNewTaskForm);
    }

    renderTasksSidebar() {
        const sidebarContainer = document.querySelector(".listContainer>.list");
        
    }

    renderTaskList(taskList) {
        paraDescription.classList.add("listTitle");
        paraDescription.innerHTML = taskList.description;

        buttonAddTask.innerHTML = "Add new task";

        headerListName.innerHTML = taskList.name;
        headerListName.classList.add("listName");

        divContentHeader.classList.add("contentHeader");

        divContentHeader.appendChild(headerListName);
        divContentHeader.appendChild(buttonAddTask);
        divContentHeader.appendChild(paraDescription);

        return divContentHeader;
    }

    addTask(title, description, dueDate) {
        return [title, description, dueDate];
    }

    createNewTaskForm() {
        //Create add task modal
        const dialog = document.createElement("dialog");
        const form = document.createElement("form");
        const formSubmitButton = document.createElement("input");
        const paraContainer = document.createElement("p");
        const titleLabel = document.createElement("label");
        const divContainerTitle = document.createElement("div");
        const divContainerDesc = document.createElement("div");
        const divContainerDate = document.createElement("div");
        const taskTitleLabel = document.createElement("label");
        const taskDescLabel = document.createElement("label");
        const taskTitleInput = document.createElement("input");
        const taskDescInput = document.createElement("input");
        const taskDateInput = document.createElement("input");

        dialog.classList.add("modalContainer");

        taskTitleInput.setAttribute("type", "text");
        taskTitleInput.setAttribute("name", "txtTaskTitle");
        taskTitleInput.setAttribute("id", "txtTaskTitle");

        taskDescInput.setAttribute("type", "text");
        taskDescInput.setAttribute("name", "txtTaskDesc");
        taskDescInput.setAttribute("id", "txtTaskDesc");

        taskDateInput.setAttribute("type", "date");
        taskDateInput.setAttribute("name", "dateTask");
        taskDateInput.setAttribute("id", "dateTask");

        taskDescLabel.setAttribute("for", "txtTaskDesc");
        taskDescLabel.innerHTML = "Description:";

        taskTitleLabel.setAttribute("for", "txtTaskTitle");
        taskTitleLabel.innerHTML = "Title:";

        divContainerTitle.classList.add("modalElement");
        divContainerDesc.classList.add("modalElement");
        divContainerDate.classList.add("modalElement");

        titleLabel.innerHTML = "Add task";

        form.setAttribute("action", "#");
        form.setAttribute("method", "post");

        formSubmitButton.innerHTML = "Confirm";

        formSubmitButton.addEventListener("click",(e) => {
            e.preventDefault();
            const [title, description, dueDate] = this.submitTask();

            this.addTask(title, description, dueDate);
        });

        divContainerTitle.appendChild(taskTitleInput);
        divContainerTitle.appendChild(taskTitleLabel);
        divContainerDesc.appendChild(taskDescInput);
        divContainerDesc.appendChild(taskDescLabel);
        divContainerDate.appendChild(taskDateInput);
        paraContainer.appendChild(titleLabel);
        paraContainer.appendChild(divContainerTitle);
        paraContainer.appendChild(divContainerDesc);
        paraContainer.appendChild(divContainerDate);
        form.appendChild(paraContainer);
        form.appendChild(formSubmitButton);
        dialog.appendChild(form);

        document.appendChild(dialog);
    }

    submitTask() {
        const taskTitle = document.querySelector("#txtTaskTitle"); 
        const taskTitleVal = taskTitle.value;
        const taskDesc = document.querySelector("#txtTaskDesc"); 
        const taskDescVal = taskDesc.value;
        const taskDate = document.querySelector("#dateTask"); 
        const taskDateVal = taskDate.value;

        return [taskTitleVal, taskDescVal, taskDateVal];
    }
}