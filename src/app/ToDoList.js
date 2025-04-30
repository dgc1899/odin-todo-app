import {ToDo} from './ToDo.js';


export class ToDoList {

    #id 
    #title
    #description
    #list

    constructor(id, title, description) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#list = [];

        this.#initFirstToDo();
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get list() {
        return this.#list;
    }

    #generateToDoId() {
        return this.#list.length;
    }

    createToDo(valuesArr) {
        const id = this.#generateToDoId();
        const title = valuesArr[0];
        const description = valuesArr[1];
        const dueDate = valuesArr[2];
        const priority = valuesArr[3];
        const toDoObj = new ToDo(id, title, description, dueDate, priority);

        this.#list.push(toDoObj);
    }

    #initFirstToDo() {
        const firstToDo = new ToDo(this.#generateToDoId(), "My first task", "Edit this!", "29/09/25", "1");
        this.#list.push(firstToDo);
    }

    deleteToDo(id) {
        this.#list[id].pop();
    }

}