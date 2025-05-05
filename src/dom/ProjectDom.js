import { Modal } from "./Modal";
import { ToDoDom } from "./ToDoDom";

export class ProjectDom {
    #projectObj;

    #divProjectContainer;
    #h2ProjectTitle ;
    #divProjectsCardsContainer;
    #buttonCreate;

  constructor(projectObj) {
    this.#projectObj = projectObj;

    this.#divProjectContainer = document.createElement("div");
    this.#divProjectContainer.classList.add("project-container");

    this.#h2ProjectTitle = document.createElement("h2");

    this.#divProjectsCardsContainer = document.createElement("div");
    this.#divProjectsCardsContainer.classList.add("project-cards-container");

    this.#buttonCreate = document.createElement("button");
    this.#buttonCreate.classList.add("btn-create-toDo");
  }
  
  #openCreateModal = () => {
    const createToDoModal = new Modal();
    createToDoModal.openModal();


    const submitButton = document.querySelector("#btnConfirm");
    submitButton.addEventListener("click", (e) => this.#submitModal(e));
  }

  #submitModal(e) {
    e.preventDefault();
    const dialog = document.querySelector("#newToDoListDialog");

    const txtTitleElement = document.querySelector("#txtTitle");
    const txtDescriptionElement = document.querySelector("#txtDescription");
    const txtDueDateElement = document.querySelector("#txtDueDate");
    const txtPriorityElement = document.querySelector("#txtPriority");
    // Create new ToDo using Project object
    this.#projectObj.createToDo(txtTitleElement.value, txtDescriptionElement.value, txtDueDateElement.value, txtPriorityElement.value);

    dialog.close();
    dialog.remove();

    this.renderProject();
  }

  #deleteToDo(e) {
    if (e.target.classList.contains("btn-delete-todo")) {
      //find the data for the todo id
      const parent = e.target.closest(".toDo-Container");
      const id = parent.getAttribute("data-id");
      this.#projectObj.deleteToDo(id);
      this.renderProject();
    }
  }

  #setEventListeners() {
    this.#buttonCreate.addEventListener("click", this.#openCreateModal);
    document.addEventListener("click", (e) => this.#deleteToDo(e));
  }

  #resetProjectDom() {
    this.#divProjectsCardsContainer.innerHTML = "";
  }

  resetProjectContainerDom() {
    const main = document.querySelector("main");
    main.innerHTML = "";
  }

  renderProject() {
    this.#resetProjectDom(); //reset contents before populating
    this.#h2ProjectTitle.textContent = this.#projectObj.title;
    this.#buttonCreate.textContent = "Create new To do!";

    this.#divProjectContainer.appendChild(this.#h2ProjectTitle);
    this.#divProjectContainer.appendChild(this.#buttonCreate);

    for (const toDo of this.#projectObj.toDoArray) {
        const toDoDomObj = new ToDoDom(toDo);
        const toDoStructure = toDoDomObj.renderToDo();
        this.#divProjectsCardsContainer.appendChild(toDoStructure);
    }

    this.#divProjectContainer.appendChild(this.#divProjectsCardsContainer);
    
    this.#setEventListeners()
    //debug delete this
    const main = document.querySelector("main");
    main.appendChild(this.#divProjectContainer);
  }
}