import { LightningElement, api } from 'lwc';

export default class Demo16SimpleEventChild extends LightningElement {
    @api name;
    @api title;

    selectHandler(event){
        console.log('Clicked');
        const selectedEvent = new CustomEvent('simpleevent', { detail: { name: 'Sakthivel', title: 'Salesforce'}});
        console.log('Clicked'+JSON.stringify(selectedEvent));
        this.dispatchEvent(selectedEvent);
    }

    @api
    handleChild() {
        console.log('Called Child Method from Parent Component');
    }
}