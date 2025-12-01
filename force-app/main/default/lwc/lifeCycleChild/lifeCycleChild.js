import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super();
        console.log('child constructor call');

    }

    connectedCallback() {
        //code
        console.log("child connectedCallback called");
        throw new Error("Loading of child component failed!");
        
    }

    renderedCallback(){
        //code
        console.log("child renderedCallback called");
    }

    disconnectedCallback(){
        console.log("child disconnected callback called");
        
    }
}