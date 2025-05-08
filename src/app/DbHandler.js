import { App } from "./App";
export const DbHandler  = (function() {

    const saveToStorage = (appObj) => {
        const serialized = JSON.stringify(appObj);
        localStorage.setItem("1", serialized);
    }

    const loadFromStorage = () => {
      const string = localStorage.getItem("1");
      return JSON.parse(string);
    }

    return {saveToStorage, loadFromStorage};
})();