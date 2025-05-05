import './Styles/styles.css';
import { ToDo } from "./app/ToDo";
import { ToDoDom } from "./dom/ToDoDom";
import {Project} from "./app/Project";
import {ProjectDom} from "./dom/ProjectDom";
import { App } from './app/App';
import { AppDom } from './dom/AppDom';

const app = new App();
const appDom = new AppDom(app);

appDom.renderApp();
