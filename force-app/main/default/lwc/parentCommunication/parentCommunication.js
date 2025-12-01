import { LightningElement } from 'lwc';

export default class ParentCommunication extends LightningElement {       
    isValid = false;

    avatarData = [
        {
            initials: "Sa",
            fallBackIconName: "standard:account",
            alternativeText: "Salesforce",
        },
         {
            initials: "BW",
            fallBackIconName: "standard:avatar",
            alternativeText: "Bob Wilson",
        },
         {
            initials: "WE",
            fallBackIconName: "custom:custom92",
            alternativeText: "Wilson Enterprises",
        }
    ];

    handleClick(event){
        this.template.querySelector('c-child-communication').showMeSomething();
    }

    modifyValidity(event){
        this.isValid = !this.isValid;
    }

}