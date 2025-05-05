import './Styles/styles.css';
import { ToDo } from "./app/ToDo";
import { ToDoDom } from "./dom/ToDoDom";
import {Project} from "./app/Project";
import {ProjectDom} from "./dom/ProjectDom";

const projectObj = new Project(1, "My new project");

const projectDom = new ProjectDom(projectObj);

projectDom.renderProject();


