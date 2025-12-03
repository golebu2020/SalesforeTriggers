import { LightningElement } from 'lwc';

export default class SetterDemoParent extends LightningElement {

    myValue;

    handleClick(){
        this.myValue = 'yes';
    }
}