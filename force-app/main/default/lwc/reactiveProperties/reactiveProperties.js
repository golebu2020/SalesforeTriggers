import { LightningElement } from 'lwc';

export default class ReactiveProperties extends LightningElement {
    count = 0;

    handleReset(){
        this.count = 0;
    }

    handleIncrease(){
        this.count ++;
    }

    handleDecrease(){
        this.count --;
        if (this.count < 0){
            this.count = 0;
        }
    }

}