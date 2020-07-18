import { LightningElement } from 'lwc';

export default class Demo4ConditionalRendering extends LightningElement {
    displaySection = false;

    handleChange(event) {
        console.log(event.target.checked);
        this.displaySection = event.target.checked;
    }
}