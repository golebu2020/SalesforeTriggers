import { LightningElement, api } from 'lwc';

export default class ModalView extends LightningElement {

    @api isModalOpen;

    closeModal(){
        const myEvent = new CustomEvent('close',
            {
                detail:
                {
                    message: 'Modal is closed'
                }
        } );
        this.dispatchEvent(myEvent);
    }
}