import { LightningElement } from 'lwc';

export default class Demo10LWCLifeCycleHooks extends LightningElement {
    greetings = 'Parent - Default Message';
    constructor(){
        super();
        console.log('Parent Component - constructor Called');
    }
    
    connectedCallback(){
        console.log('Parent Component - connectedCallback Called');
    }

    renderedCallback(){
        console.log('Parent Component - renderedCallback Called');
    }
    
    disconnectedCallback(){
        console.log('Parent Component - disconnectedCallback Called');
    }

    errorCallback(error, stack) {
        console.log('Parent Component - errorCallback Called');
    }

    handleOnClick(event) {
        this.greetings = 'Parent - Custom Message';
        console.log('Parent greetings: '+this.greetings);
    }

    
}