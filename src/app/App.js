import { Project } from "./Project"

export class App {
    #projectsList

    constructor() {
        this.#projectsList = [];
        this.#initFirstProject();
    }

    get projectsList() {
        return this.#projectsList;
    }

    createProject(title) {
        const id = this.#generateProjectId();
        const projectObj = new Project(id, title);
        this.#projectsList.push(projectObj);
    }

    #initFirstProject() {
        if (this.#projectsList.length === 0) {
            const firstProject = new Project(this.#generateProjectId, "Default");
            this.#projectsList.push(firstProject);
        }
    }

    #generateProjectId() {
        const prefix = 'proj';
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        return `${prefix}-${timestamp}-${random}`;
    }
}