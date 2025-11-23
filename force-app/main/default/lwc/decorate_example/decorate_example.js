import { api, LightningElement, track } from 'lwc';

export default class Decorate_example extends LightningElement {
    @api recordId;  //public proert passed from parent
    @api objectApiName;

    @track privateProperty = 'I am private';

    get displayText(){
        return `Record ID: ${this.recordId}, Object: ${this.objectApiName}`;
    }

    handleButtonClick(){
        this.privateProperty = 'Value changed!';
    }
}