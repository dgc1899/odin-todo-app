import {TaskModel} from '../Models/TaskModel'
class TaskController {
    constructor(taskModel, taskView, taskListController) {
        this.taskModel = taskModel;
        this.taskView = taskView;
        this.taskListController = taskListController;
    }

    createNewTask(name, description, dueDate, priority, done) {
        const task = new TaskModel(name, description, dueDate, priority, done, this.taskListController.currentTaskListSelected);
        this.renderTask();
        return task;
    }

    renderTask() {
        this.taskView.renderTask(this.taskModel);
    }
}