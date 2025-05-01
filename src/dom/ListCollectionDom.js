import { CreateToDoListModal } from "./createToDoListModal.js";
import { ToDoListDom } from "./ToDoListDom.js";

export class ListCollectionDom {
    #listElements;
    #createNewListButton;

    constructor() {
        this.#listElements = document.querySelector(".collections-container>ul");
        this.#createNewListButton = document.querySelector(".sidebar>button");
        this.#setEventListeners();
    }


    #initializeListElement() {
        const listElement = document.createElement("li");
        listElement.classList.add("list-collection");

        return listElement;
    }

    #setEventListeners() {
        this.#createNewListButton.addEventListener("click", CreateToDoListModal.showModal);
        this.#listElements.addEventListener("click", ToDoListDom.renderToDoList())
    }

    renderCollection(collectionObj) {
        for (const toDoList of collectionObj) {
            const listElement = this.#initializeListElement();
            listElement.innerHTML = toDoList.title;
            listElement.dataset.id = toDoList.id;
            this.#setEventListeners();
            this.#listElements.appendChild(listElement);
        }
    }
}