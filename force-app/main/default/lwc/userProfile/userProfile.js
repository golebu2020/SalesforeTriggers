import { LightningElement } from 'lwc';

export default class UserProfile extends LightningElement {
    showDetails = false;
    lastLogin = '2024-01-15 09:30:00';

    handleToggle(event) {
        this.showDetails = event.target.checked;
    }
}