import {DbHandler} from './dbHandler.js';
import { ToDoList } from './ToDoList.js';

export const ListCollection = (function() {

    let collection = [];
    
    const generateCollectionId = () => {
        if (DbHandler.isEmpty) {
            return "0";
        }
        else {
            const id = DbHandler.numberOfItems;
            return toString(id); 
        }
    }

    const generateToDoListId = () => {
        return collection.length;
    };

    const initFirstToDoList = () => {
        const id = generateCollectionId();
        const firstToDo = new ToDoList(id, "Default", "Add your tasks here!");
        collection.push(firstToDo);
    }

    const addToDoList = (title, description) => {
        const id = generateToDoListId().toString();
        const toDoListObj = new ToDoList(id, title, description);
        collection.push(toDoListObj);
        DbHandler.createToDoList(id, toDoListObj);
    }

    const deleteToDoList = (id) =>  {
        collection[id].pop();
    }

    const getToDoLists = () => {
        const toDoLists = [];
        for (const toDoList of collection) {
            toDoLists.push(toDoList);
        }
        return toDoLists;
    }

    initFirstToDoList();

    return {addToDoList, deleteToDoList, getToDoLists};
}) ();