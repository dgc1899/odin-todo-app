export const DbHandler = (function DbHandler() {
    const isEmpty = () => localStorage.length == 0;
    const numberOfItems = () => localStorage.length;
    const getToDoListById = (id) => {return localStorage.getItem(id.toString()); }
    const createToDoList = ( id, toDoListObj) => {localStorage.setItem(id, toDoListObj)}
    return {isEmpty, numberOfItems, createToDoList, getToDoListById};
})();