import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';

export default class PubsubComponentA extends NavigationMixin(LightningElement) {

    message;

    inputHandler(event){
        this.message = event.target.value;

    }

    publishHandler(){
        pubsub.publish('componentA', this.message);

    }

    gotoHomePage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }

    gotoNewAccountPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }

    gotoNewChatterPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }
}