import './Styles/styles.css';
import {ToDo} from './app/ToDo.js';
import {ToDoDom} from './dom/ToDoDom.js';
import {ListCollection} from './app/ListCollection.js';
import {ListCollectionDom} from './dom/ListCollectionDom.js';
import { ToDoList } from './app/ToDoList.js';
import { ToDoListDom } from './dom/ToDoListDom.js';

ListCollection.addToDoList("My ToDo list", "This is my todo list");

const listCollection = ListCollection.getToDoLists();
const listCollectionDom = new ListCollectionDom();

listCollectionDom.renderCollection(listCollection);