export class ToDoDom {
    #toDoContainer;
    #titleContainer;
    #title;
    #detailsContainer;
    #description;
    #dueDate;
    #doneCheckbox;

    constructor() {
       this.#initializeElements();
       this.#configureElements();
       this.#buildStructure();
    }

    #initializeElements() {
        this.#toDoContainer = document.createElement("div");
        this.#titleContainer = document.createElement("div");
        this.#title = document.createElement("h2");
        this.#detailsContainer = document.createElement("div");
        this.#description = document.createElement("p");
        this.#dueDate = document.createElement("p");
        this.#doneCheckbox = document.createElement("input");

    }

    #configureElements() {
        this.#toDoContainer.classList.add("toDo-Container");
        this.#titleContainer.classList.add("title-container");
        this.#detailsContainer.classList.add("details-container");
        this.#doneCheckbox.setAttribute("type", "checkbox");
    }

    #buildStructure() {
        this.#toDoContainer.appendChild(this.#titleContainer);
        this.#titleContainer.appendChild(this.#title);
        this.#toDoContainer.appendChild(this.#detailsContainer);
        this.#detailsContainer.appendChild(this.#description);
        this.#detailsContainer.appendChild(this.#dueDate);
        this.#toDoContainer.appendChild(this.#doneCheckbox);
    }

    #setEventListeners() {
        
    }

    renderToDo(todoObj) {
        this.#title.innerHTML =  todoObj.title;
        this.#description.innerHTML = todoObj.description;
        this.#dueDate.innerHTML = todoObj.dueDate;

        return this.#toDoContainer;
    }

    setPriority() {

    }
}