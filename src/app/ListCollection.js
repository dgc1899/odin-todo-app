import {DbHandler} from './dbHandler.js';
import { ToDoList } from './ToDoList.js';

export class ListCollection {
    #id
    #collection
    #title
    #description

    constructor(title, description) {
        this.#id = this.#generateCollectionId();
        this.#collection = [];
        this.#title = title;
        this.#description = description;

        this.#initFirstToDoList();
    }

    get id() {
        return this.#id;
    }

    get collection() {
        return this.#collection;
    }

    get title() {
        return this.#title;
    }

    get description() {
    return this.#description;
    }
    
    #generateCollectionId() {
        if (DbHandler.isEmpty) {
            return "0";
        }
        else {
            const id = DbHandler.numberOfItems;
            return toString(id); 
        }
    }


    #initFirstToDoList() {
        const id = this.#generateToDoListId();
        const firstToDo = new ToDoList(id, "Default", "Add your tasks here!");
        this.#collection.push(firstToDo);
    }

    #generateToDoListId() {
        return this.#collection.length;
    }
    

    addToDoList(toDoListObj) {
        DbHandler.createToDoList(toDoListObj.id, todoListObj);
    }

    deleteToDoList(id) {
        this.#collection[id].pop();
    }
}