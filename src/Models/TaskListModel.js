class TaskListModel {
    constructor(listName, listDescription, Id) {
        this.name = listName;
        this.description = listDescription;
        this.taskList = [];
        this.Id = Id;
        storeList();
    }
    
    storeList(id) {
        localStorage.setItem(id, JSON.stringify(this));
    }

    appendTask(taskObj, id) {
        
        for(let i = 0; i < localStorage.length - 1; i++) {
            if (localStorage.key === id) {
                this.taskList.push(taskObj);
            }
        }
        this.storeList(id);
    }

    deleteTask(taskId) {
        localStorage.removeItem(taskId);
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get taskList() {
        
    }

}