import { ProjectDom } from "./ProjectDom";
import { ProjectModal } from "./ProjectModal";

export class AppDom {
    #appObj;

    #contentContainer;
    #main

    #sidebar;
    #newListButton;
    #collectionsContainer;
    #collectionsList;


    constructor(appObj) {
        this.#appObj = appObj;

        this.#contentContainer = document.createElement("div");
        this.#contentContainer.classList.add("content-container");


        this.#main = document.createElement("main");

        // Create sidebar
        this.#sidebar = document.createElement('aside');
        this.#sidebar.className = 'sidebar';

        // Create new list button
        this.#newListButton = document.createElement('button');
        this.#newListButton.textContent = 'Create new list';

        // Create heading
        const heading = document.createElement('h1');
        heading.textContent = 'Your collections';

        // Create collections container
        this.#collectionsContainer = document.createElement('div');
        this.#collectionsContainer.className = 'collections-container';

        // Create collections list
        this.#collectionsList = document.createElement('ul');


        this.#collectionsContainer.appendChild(this.#collectionsList);
        this.#sidebar.appendChild(heading);
        this.#sidebar.appendChild(this.#newListButton);
        this.#sidebar.appendChild(this.#collectionsContainer);

        this.#contentContainer.appendChild(this.#sidebar);


        this.#contentContainer.appendChild(this.#main);


        document.body.appendChild(this.#contentContainer);
    }

    #openNewProjectModal = () => {
        const projectModal = new ProjectModal();
        projectModal.openModal();

        const submitButton = document.querySelector("#btnConfirmProject");
        submitButton.addEventListener("click", (e) => this.#submitModal(e));
    }

    #setEventListeners() {
        this.#newListButton.addEventListener("click", this.#openNewProjectModal);
    }

    #submitModal(e) {
        e.preventDefault();
        const dialog = document.querySelector("#newProjectDialog");
    
        const txtTitleElement = document.querySelector("#txtProjectTitle");
        // Create new ToDo using Project object
        this.#appObj.createProject(txtTitleElement.value);
    
        dialog.close();
        dialog.remove();
    
        this.renderApp();
      }

      #resetAppDom() {
        this.#collectionsList.innerHTML = "";
      }

    renderApp() {
        this.#resetAppDom();
        const main = document.querySelector("main");
        const sidebar = document.querySelector(".sidebar");
        const ul = document.querySelector("ul");

        for(const project of this.#appObj.projectsList) {
            const projectDomObj = new ProjectDom(project);
            projectDomObj.resetProjectContainerDom();
            const projectStructure = projectDomObj.renderProject();
            main.appendChild(projectStructure);

            const listElement = document.createElement("li");
            const linkElement = document.createElement("a");
            linkElement.innerHTML = project.title;
            linkElement.href = "#";

            listElement.appendChild(linkElement);

            ul.appendChild(listElement);
            sidebar.appendChild(ul);
        }
        this.#setEventListeners();
    }
}