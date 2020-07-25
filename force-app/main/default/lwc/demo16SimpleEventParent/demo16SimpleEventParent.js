import { LightningElement,api } from 'lwc';

export default class Demo16SimpleEventParent extends LightningElement {

    connectedCallback() {
        console.log('connectedCallback');
    }
    renderedCallback() {
        console.log('renderedCallback');
    }
    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

    handleEventFromParent(event) {
        console.log('Event Called');
        const sessionName = event.detail;
        console.log('Event name:' +event.detail.name);
        console.log('Event title:' +event.detail.title);

    }

    handleParent() {
        console.log('Initiate to Call Child Method From Parent');
        this.template.querySelector('c-demo16-simple-event-child').handleChild();
    }

}