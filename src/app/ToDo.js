export class ToDo {
    constructor(id, title, description, dueDate, priority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = false;
    }

    set priority(value) {
        this._priority = value;
    }

     set done(value) {
        this._done = value;
     }
}