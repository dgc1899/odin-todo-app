import { ToDo } from "./ToDo";

export class Project {
    #id;
    #title;
    #toDoArray

    constructor(id, title, savedData) {
        this.#id = id;
        this.#title = title;
        this.#toDoArray = [];

        if (!savedData) {
            this.createToDo("Default", "Edit this!", "Tomorrow", "1", false);
        }
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
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        return `${timestamp}-${random}`;
    }

    createToDo(title, description, dueDate, priority, done) {
        const toDoId = this.#generateToDoId();
        const toDoObj = new ToDo(toDoId, title, description, dueDate, priority, done, this.#id);
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

    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            toDoArray: this.#toDoArray
        };
    }

}