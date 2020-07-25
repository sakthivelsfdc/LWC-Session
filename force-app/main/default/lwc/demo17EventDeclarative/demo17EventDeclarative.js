import { LightningElement } from 'lwc';

export default class Demo17EventDeclarative extends LightningElement {
    selectedContact;
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO',
        }
    ];

    contactSelected(event) {
        const contactId = event.detail;
        console.log('contactId',contactId);

        /*
        const contactId = event.detail.contactId;
        console.log('contactId:',contactId);
        const contactName = event.detail.contactName;
        console.log('contactName:',contactName);
        */
        this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
    }
}