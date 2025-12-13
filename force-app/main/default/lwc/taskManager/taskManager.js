import { LightningElement, track } from 'lwc';

export default class TaskManager extends LightningElement {
    @track taskList = [];

    handleAddTask(event) {
        // Add new task to the list
        const newTask = {
            id: this.taskList.length + 1,
            name: event.detail.name
        };
        this.taskList = [...this.taskList, newTask]; // update list reactively
    }
}