import { LightningElement,api } from 'lwc';

export default class Demo17EventDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', { detail: this.contactdetails.Id});
        //const selectedEvent = new CustomEvent('selected', { detail: { contactId: this.contactdetails.Id , contactName : this.contactdetails.Name}});
        console.log('Clicked '+JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}