export class ToDo {
    #id
    #title
    #description
    #dueDate
    #priority
    #done
    #projectId;

    constructor(id, title, description, dueDate, priority, done, projectId) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = done;
        this.#projectId = projectId;
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

    get dueDate() {
return this.#dueDate;
    }

    get priority() {
return this.#priority;
    }

    get done() {
return this.#done;
    }

    get projectId() {
        return this.#projectId;
    }

    set title(value) {
        this.#title = value;
    }

    set description(value) {
        this.#description = value;
    }

    set dueDate(value) {
        this.#dueDate = value;
    }

    set priority(value) {
        this.#priority = value;
    }

    set done(value) {
        this.#done = value;
    }

    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            description: this.#description,
            dueDate: this.#dueDate,
            priority: this.#priority,
            done: this.#done,
            projectId: this.#projectId
        };
    }

}

