import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {

    _internalValue;

    @api
    get publicProperty(){
        return this._internalValue;
    }

    set publicProperty(value){
        this._internalValue = value;
    }
}