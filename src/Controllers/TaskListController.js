class TaskListController {
    constructor(taskListModel, taskListView, taskController) {
        this.taskListModel = taskListModel;
        this.taskListView = taskListView;
        this.taskController = taskController;
        this.currentTaskListSelected = null;
    }

    storeList() {
        
    }

    appendTask() {
        const taskValues = this.taskListView.addTask();
        const taskObj = this.taskController.createNewTask(taskValues[0], taskValues[1], taskValues[2], 1, false);
        this.taskListModel.appendTask(taskObj, this.currentTaskListSelected);
    }

    deleteTask() {
        
    }

    createDefault() {
        
    }

    renderTaskList() {
        this.taskListView.renderTaskList(this.taskListModel);
    }

    get currentTaskListSelected() {
        return this.currentTaskListSelected;
    }

    set currentTaskListSelected(value) {
        this.currentTaskListSelected = value;
    }
}