import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userNames = [
        "John",
        "Smith",
        "Mike",
        "Chinedu"
    ]
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.border = '1px solid red';
        console.log(elem.innerText);

        const userElements = this.template.querySelectorAll('.name');
        Array.from(userElements).forEach(item => {
            console.log(item.innerText)
        });

        //lwc:manual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = "<p>Hey, I'm a child element</p>"

    }
}