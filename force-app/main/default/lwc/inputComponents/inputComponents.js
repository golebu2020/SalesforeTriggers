import { LightningElement } from 'lwc';

export default class InputComponents extends LightningElement {
    name = '';

    handleNameChange(event){
        this.name = event.target.value;
    }

}