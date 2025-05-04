import './Styles/styles.css';
import { ToDo } from "./app/ToDo";
import { ToDoDom } from "./dom/ToDoDom";
import {Project} from "./app/Project";
import {ProjectDom} from "./dom/ProjectDom";

const projectObj = new Project('1', "My new project");
projectObj.createToDo("Test todo", "This is a test todo", "Whenever", 0);
projectObj.createToDo("Another one", "okay", "Whenever", 1);

const projectDom = new ProjectDom(projectObj);

projectDom.renderProject();

projectObj.deleteToDo(2);

projectDom.renderProject();


