import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class ChildCommunication extends LightningElement {
    @api greetingMessage;
    @api avatarData;
    @api isValid;

    @api showMeSomething(){
        this.dispatchEvent(new ShowToastEvent({
            title: "This is the toast title",
            message: "Method in child called from Parent",
            variant: "success"
        }));
    }
}