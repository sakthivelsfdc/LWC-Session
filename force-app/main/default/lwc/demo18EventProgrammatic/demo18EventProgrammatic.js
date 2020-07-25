import { LightningElement } from 'lwc';

export default class Demo18EventProgrammatic extends LightningElement {
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
        this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
    } 

    constructor(){
       super();
       /*
       this.template.addEventListener('selected', evt => {
            const contactId = evt.detail;
            this.selectedContact = this.contacts.find(contact => contact.Id === contactId);
       });*/
      this.template.addEventListener('selected',this.contactSelected.bind(this));
    }

}