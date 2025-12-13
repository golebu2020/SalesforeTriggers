import { LightningElement, api } from "lwc";
import { CloseActionScreenEvent } from 'lightning/actions';
export default class SampleA extends LightningElement {
	@api recordId;
	@api objectApiName;
	closeModal() {
		this.dispatchEvent(new CloseActionScreenEvent());
	}
}