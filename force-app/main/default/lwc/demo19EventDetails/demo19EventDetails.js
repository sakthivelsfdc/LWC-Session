import { LightningElement,api } from 'lwc';

export default class Demo19EventDetails extends LightningElement {
    @api contactdetails;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('selected', {bubbles : true});
        console.log('Clicked '+JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }
}