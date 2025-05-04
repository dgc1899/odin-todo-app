import { ToDo } from "./ToDo";

export class Project {
    #id;
    #title;
    #toDoArray

    constructor(id, title) {
        this.#id = id;
        this.#title = title;
        this.#toDoArray = [];
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get toDoArray() {
        return this.#toDoArray;
    }

   
    set id(value) {
        this.#id = value;
    }

    set title(value) {
        this.#title = value;
    }

    #generateToDoId() {
        return this.#toDoArray.length + 1;
    }

    createToDo(title, description, dueDate, priority) {
        const toDoId = this.#generateToDoId();
        const toDoObj = new ToDo(toDoId, title, description, dueDate, priority);
        this.#toDoArray.push(toDoObj);
    }

    deleteToDo(id) {
        for(const toDo of this.#toDoArray) {
            const toDoArrPosition = this.#toDoArray.indexOf(toDo);
            if (toDo.id === id) {
                this.#toDoArray.splice(toDoArrPosition, 1);
            }
        }
    }

    editToDo(id) {
        for(const toDo of this.#toDoArray) {
            if (toDo.id === id) {
                
            }
        }
    }

}