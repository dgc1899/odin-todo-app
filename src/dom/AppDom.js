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

    #currentlySelectedProject;


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

        //this.#currentlySelectedProject = 
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

      #loadProject(e) {
        const id = e.target.getAttribute("data-id");
        this.#appObj.currentlySelectedProject = id;
        this.renderApp();

      }

      #deleteProject(e) {
        const id = e.target.dataset.id;
        this.#appObj.deleteProject(id);
        this.renderApp();
      }

      renderSidebar() {
        const sidebar = document.querySelector(".sidebar");
        const ul = document.querySelector("ul");

        for (const project of this.#appObj.projectsList) {
            const listElement = document.createElement("li");

            // Create container for link and delete button
            const itemContainer = document.createElement("div");
            itemContainer.classList.add("project-item-container");

            // Create link element
            const linkElement = document.createElement("a");
            linkElement.innerHTML = project.title;
            linkElement.href = "#";
            linkElement.dataset.id = project.id;
            linkElement.addEventListener("click", (e) => this.#loadProject(e))

            // Create delete button
            const deleteButton = document.createElement("button");

            if (this.#appObj.projectsList.indexOf(project) > 0) { //Do not attach a delete button to the first project aka the default project
                deleteButton.innerHTML = "×";
                deleteButton.classList.add("delete-project-btn");
                deleteButton.dataset.id = project.id;
                deleteButton.addEventListener("click", (e) => this.#deleteProject(e));
            }    
            itemContainer.appendChild(linkElement);
            itemContainer.appendChild(deleteButton);
            listElement.appendChild(itemContainer);
    
            ul.appendChild(listElement);
            sidebar.appendChild(ul);
        }
      }

      renderCurrentProject() {
        const main = document.querySelector("main");
        const currentProject = this.#appObj.currentlySelectedProject;

        const projectDomObj = new ProjectDom(currentProject);
        projectDomObj.resetProjectContainerDom();
        const projectStructure = projectDomObj.renderProject();
        main.appendChild(projectStructure);

      }

    renderApp() {
        this.#resetAppDom();
        this.renderSidebar();
        this.renderCurrentProject();
        this.#setEventListeners();
    }
}