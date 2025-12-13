import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Zero to Hero";
    title = "Aura";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track address = {
        city: 'Melbourne',
        postcode: 3008,
        country: 'Australia'
    }
    
    changeCity(event){
        this.address.city = event.target.value;
    }

    // Getters

    users = ["John", "Smith", "Nike"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0].toUpperCase() + " " + this.users[1];
    }

    get multiply(){
        return this.num1 * this.num2;
    }

}