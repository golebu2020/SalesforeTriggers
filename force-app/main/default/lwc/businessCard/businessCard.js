import { LightningElement, api } from 'lwc';

export default class BusinessCard extends LightningElement {
    @api contact = {
        Name: 'John Doe',
        Title: 'Sales Manager',
        Company: 'Acme Corporation',
        Email: 'john.doe@acme.com',
        Phone: '+1 (555) 123-4567',
        Address: '123 Main St, City, State 12345',
        PhotoUrl: '/resource/profile_placeholder'
    };

    handleContact() {
        // Simple contact action - you can expand this
        window.open(`mailto:${this.contact.Email}`, '_blank');
    }
}