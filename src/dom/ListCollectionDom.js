export class ListCollectionDom {
    #listElement;

    constructor() {
        this.#initializeElements();
        this.#configureElements();
        this.#buildStructure();
    }

    #initializeElements() {
        this.#listElement = document.createElement("li");
    }

    #configureElements() {
        this.#listElement.classList.add("list-collection");
    }

    #buildStructure() {
    }

    renderCollection(collectionObj) {
        this.#listElement.innerHTML = collectionObj.title;
        this.#listElement.dataset.id = collectionObj.id;
        
        return this.#listElement;
    }
}