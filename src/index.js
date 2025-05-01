import { ToDo } from "./app/ToDo";
import { ToDoDom } from "./dom/ToDoDom";

const toDo = new ToDo("My todo", "lol", "Whatever", "0");
const toDo2 = new ToDo("Another todo ", "lol", "Whatever", "0");

const toDoDom = new ToDoDom(toDo);
const toDoDom2 = new ToDoDom(toDo2);
toDoDom.renderToDo(toDo);
toDoDom2.renderToDo(toDo2);