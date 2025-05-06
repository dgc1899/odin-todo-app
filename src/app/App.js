import { Project } from "./Project"

export class App {
    #projectsList
    #currentlySelectedProject;

    constructor() {
        this.#projectsList = [];
        this.#initFirstProject();
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
        const projectObj = new Project(id, title);
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
            const firstProject = new Project(this.#generateProjectId(), "The default project");
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
}