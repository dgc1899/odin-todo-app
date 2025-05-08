import './Styles/styles.css';
import { App } from './app/App';
import { DbHandler } from './app/DbHandler';
import { AppDom } from './dom/AppDom';

const savedData = DbHandler.loadFromStorage();

const app = new App(savedData);
const appDom = new AppDom(app);

appDom.renderApp();

window.addEventListener("beforeunload", () => {
    DbHandler.saveToStorage(app);
});