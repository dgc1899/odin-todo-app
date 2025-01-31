import {TaskController} from '../Controllers/TaskController'

class TaskModel {
    constructor(taskName, taskDescription, taskDueDate, taskPriority, taskList) {
        this.name = taskName;
        this.description = taskDescription;
        this.dueDate = taskDueDate;
        this.priority = taskPriority;
        this.done = false;
        this.taskList = taskList;
        this.id = getTaskId(taskList.getId());
    }

    getTaskId(taskListId) {
        const newId = undefined;
        if (localStorage.getItem(taskListId) != null) {
            const taskString = localStorage.getItem(taskListId);
            const taskJson = JSON.parse(taskString);
            for (const prop in taskJson) {
                if (prop == "taskList") {
                    newId = prop.length + 1;
                }
            } 
        }
        return newId;
    }

    getTaskList() {
        return this._taskList;
    }

    setDone(value) {
        this._done = value;
    }
}