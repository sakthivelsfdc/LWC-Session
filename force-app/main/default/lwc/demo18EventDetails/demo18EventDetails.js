import { LightningElement,api } from 'lwc';

export default class Demo18EventDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', { detail: this.contactdetails.Id , bubbles : true});
        //const selectedEvent = new CustomEvent('selected', { detail: { contactId: this.contactdetails.Id , contactName : this.contactdetails.Name}});
        console.log('Clicked '+JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}