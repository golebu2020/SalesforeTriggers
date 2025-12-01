import { LightningElement } from 'lwc';

import mainTemplate from './renderComponent.html';
import alternateTemplate from './myComponentAlternate.html';
import myComponentError from './myComponentError.html';
import LightningAlert from 'lightning/alert';

export default class RenderComponent extends LightningElement {

    async showAlert() {
        await LightningAlert.open({
            message: 'This is an alert message!',
            theme: 'success', // "success", "info", "warning", "error"
            label: 'Success'
        });
    }

    showAlternate = true;

    render(){
        return mainTemplate;
    }

    async handleClick(){
        await this.showAlert();
    }

}