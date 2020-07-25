import { LightningElement } from 'lwc';

export default class Demo19EventPropagation extends LightningElement {
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
       //const contactId = event.detail; - Demo 18 Uses as even.detail
       //const contactId =  event.target.detail;
       const tempContact = event.target.contactdetails;
       console.log('tempContact:'+JSON.stringify(tempContact));
       this.selectedContact = this.contacts.find(contact => contact.Id === tempContact.Id);
    } 
}