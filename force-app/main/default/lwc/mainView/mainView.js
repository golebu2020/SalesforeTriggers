import { LightningElement } from 'lwc';

export default class MainView extends LightningElement {
    isModalOpen = true;
    message
    showInformation(event){
        this.message = event.detail.message;
        this.isModalOpen = false;
    }
}