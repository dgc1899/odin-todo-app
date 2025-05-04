import { Modal } from "./Modal"

export class ToDoDom {
    // <div class="toDo-Container">
    //     <div class="title-container">
    //         <h2>Title</h2>
    //     </div>
    //     <div class="details-container">
    //         <p>Description</p>
    //         <p>Due date</p>
    //     </div>
    //     <input type="checkbox"/>
    // </div>

    #toDoContainer
    #titleContainer
    #detailsContainer
    #lblTitle
    #paraDescription
    #paraDueDate
    #inputComplete;
    #inputEdit;

    #toDoObj;

    constructor(toDoObj) {
        this.#toDoObj = toDoObj; 

        this.#toDoContainer = document.createElement("div");
        this.#toDoContainer.classList.add("toDo-Container");
        this.#toDoContainer.dataset.done = false;

        this.#titleContainer = document.createElement("div");
        this.#titleContainer.classList.add("title-container");

        this.#detailsContainer = document.createElement("div");
        this.#detailsContainer.classList.add("details-container");

        this.#lblTitle = document.createElement("h2");
        this.#paraDescription = document.createElement("p");
        this.#paraDueDate = document.createElement("p");

        this.#inputComplete = document.createElement("input");
        this.#inputComplete.setAttribute("type", "checkbox");
        this.#inputComplete.classList.add("chbx-done");

        this.#inputEdit = document.createElement("button");
        this.#inputEdit.classList.add("btn-edit-todo");

        this.#setEventListeners();
    }

    #setStrikethrough(set) {
        const strikethruPara = document.createElement("s");
            const strikethruTitle = document.createElement("s");
            const paraDescString = this.#paraDescription.textContent;
            const paraTitleString = this.#lblTitle.textContent;
        if (set) {
            this.#paraDescription.textContent='';
            this.#lblTitle.textContent='';
    
            strikethruPara.textContent = paraDescString;
            strikethruTitle.textContent = paraTitleString;
    
            this.#paraDescription.appendChild(strikethruPara);
            this.#lblTitle.appendChild(strikethruTitle);
        }
         else {
            this.#paraDescription.textContent = paraDescString;
            this.#lblTitle.textContent = paraTitleString;
         }
    }

    #setBGColor(color) {
        this.#toDoContainer.style.backgroundColor = color;
    }

    #setComplete(e) {
        const doneValue = e.target.checked;

        this.#toDoObj.done = doneValue;
        this.#toDoContainer.dataset.done =  doneValue;
        if (JSON.parse(this.#toDoContainer.dataset.done)) {
            this.#setStrikethrough(true);
            this.#setBGColor("gray");
            
        }
        else {
            this.#setBGColor("white");
            this.#setStrikethrough(false)
        }

    }
    #openEditModal(e) {
        e.preventDefault();
        const modal = new Modal();
        modal.openModal();

        //this.#closeEditModal();
    }

    #setEventListeners() {
        this.#inputComplete.addEventListener("click", (e) => this.#setComplete(e));
        this.#inputEdit.addEventListener("click", (e) => this.#openEditModal(e));
    }

    renderToDo() {
        const main = document.querySelector("main");

        this.#lblTitle.innerHTML = this.#toDoObj.title;
        this.#paraDescription.innerHTML = this.#toDoObj.description;
        this.#paraDueDate.innerHTML = this.#toDoObj.dueDate;
        this.#inputComplete.checked = this.#toDoObj.done;
        this.#inputEdit.innerHTML = "Edit";
    
        // Append title to titleContainer
        this.#titleContainer.appendChild(this.#lblTitle);
        
        // Append description and due date to detailsContainer
        this.#detailsContainer.appendChild(this.#paraDescription);
        this.#detailsContainer.appendChild(this.#paraDueDate);
        this.#detailsContainer.appendChild(this.#inputComplete);
        this.#detailsContainer.appendChild(this.#inputEdit);
        
        // Build main container
        this.#toDoContainer.appendChild(this.#titleContainer);
        this.#toDoContainer.appendChild(this.#detailsContainer);
        
        return this.#toDoContainer;

    }

}