import { LightningElement, api } from 'lwc';

export default class TaskList extends LightningElement {
    @api tasks = [];

    get hasTasks() {
        return this.tasks && this.tasks.length > 0;
    }
}