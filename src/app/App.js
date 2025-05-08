import { Project } from "./Project"

export class App {
    #projectsList
    #currentlySelectedProject;

    constructor(savedData) {
        this.#projectsList = [];
        if (savedData) {
            // Reconstruct from saved data
            savedData.projectsList.forEach(projectData => {
                const project = new Project(projectData.id, projectData.title, true);
                projectData.toDoArray.forEach(todoData => {
                    project.createToDo(
                        todoData.title,
                        todoData.description,
                        todoData.dueDate,
                        todoData.priority,
                        todoData.done
                    );
                });
                this.#projectsList.push(project);
            });
            this.#currentlySelectedProject = savedData.currentlySelectedProject;
       
        }
        else {
            this.#initFirstProject();
        }
    }

    get projectsList() {
        return this.#projectsList;
    }

    get currentlySelectedProject() {
        for (const project of this.#projectsList) {
            if (project.id === this.#currentlySelectedProject) {
                return project;
            }
        }
    }

    set currentlySelectedProject(value) {
        this.#currentlySelectedProject = value;
    }

    createProject(title) {
        const id = this.#generateProjectId();
        const projectObj = new Project(id, title, false);
        this.#projectsList.push(projectObj);
    }

    deleteProject(id) {
        for (const project of this.#projectsList) {
            if (project.id === id) {
                const index = this.#projectsList.indexOf(project);
                this.#projectsList.splice(index, 1);
            }
        }
    }

    #initFirstProject() {
        if (this.#projectsList.length === 0) {
            const firstProject = new Project(this.#generateProjectId(), "The default project", false);
            this.#projectsList.push(firstProject);
            this.#currentlySelectedProject = firstProject.id;
        }
    }

    #generateProjectId() {
        const prefix = 'proj';
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        return `${prefix}-${timestamp}-${random}`;
    }

    toJSON() {
        return {
            projectsList: this.#projectsList,
            currentlySelectedProject: this.#currentlySelectedProject
        };
    }
}