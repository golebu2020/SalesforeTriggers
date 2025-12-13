import { LightningElement, track } from 'lwc';

export default class TaskInput extends LightningElement {
    @track taskName = '';

    handleChange(event) {
        this.taskName = event.target.value;
    }

    handleAddTask() {
        // send task to parent using custom event
        const taskEvent = new CustomEvent('addtask', {
            detail: this.taskName
        });
        this.dispatchEvent(taskEvent);
        this.taskName = ''; // clear input
    }
}