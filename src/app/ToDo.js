export class ToDo {
    #id
    #title
    #description
    #dueDate
    #priority
    #done

    constructor(id, title, description, dueDate, priority) {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#done = false;
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

    set done(value) {
        this.#done = value;
    }

}

