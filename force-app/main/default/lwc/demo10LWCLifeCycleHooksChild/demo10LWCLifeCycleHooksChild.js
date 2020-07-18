import { LightningElement } from 'lwc';

export default class Demo10LWCLifeCycleHooksChild extends LightningElement {
    greetings = 'Child - Default Message';
    constructor(){
        super();
        console.log('Child Component - constructor Called');
    }
    
    connectedCallback(){
        console.log('Child Component - connectedCallback Called');
    }

    renderedCallback(){
        console.log('Child Component - renderedCallback Called');
    }
    
    disconnectedCallback(){
        console.log('Child Component - disconnectedCallback Called');
    }

    errorCallback(error, stack) {
        console.log('Child Component - errorCallback Called');
    }

    handleOnClick(event) {
        this.greetings = 'Child - Custom Message';
        console.log('Child greetings: '+this.greetings);
    }
}