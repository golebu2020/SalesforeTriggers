import { LightningElement } from 'lwc';

export default class LfieCycleParent extends LightningElement {
    name
    showChild = false
    constructor() {
        super();
        console.log('parent constructor call');

    }

    connectedCallback() {
        //code
        console.log("parent connectedCallback called");
    }

    renderedCallback(){
        //code
        console.log("Parent renderedCallback called");
    }

    disconnectedCallback(){
        console.log("Parent disconnectedCallback called");
    }

    handleClick(){
        this.showChild = !this.showChild;
    }

    errorCallback(error, stack) {
        console.log(error);
        console.log(stack);
    }
}