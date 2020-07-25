import { LightningElement,wire } from 'lwc';
import {registerListener,unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Demo20EventPubSubIndividualComponent extends LightningElement {
    selectedcontactdetails  = {};

    @wire(CurrentPageReference)pageRef;

    contactSelectHandler(data){
        console.log('contactSelectHandler Called:'+ JSON.stringify(data))
        this.selectedcontactdetails = data;
    }

    connectedCallback(){
        console.log('connectedCallback Called');
        registerListener('pubsubselected',this.contactSelectHandler,this);
    }

    disconnectedCallback(){
        console.log('disconnectedCallback Called');
        unregisterAllListeners(this);
    }
}