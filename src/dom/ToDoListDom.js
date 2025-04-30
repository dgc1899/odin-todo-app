import { ToDoList } from "../app/ToDoList";
import { ToDoDom } from "./ToDoDom";

export class ToDoListDom {
    #listContainer;

    constructor() {
        this.#listContainer = document.createElement("div");
        this.#listContainer.classList.add("list-container");
    }

    renderToDoList(toDoListObj) {
        for (const toDo of toDoListObj.list) {
            const toDoDom = new ToDoDom();
            const toDoElement = toDoDom.renderToDo(toDo);
            this.#listContainer.appendChild(toDoElement);
        }
        return this.#listContainer;
    }
}