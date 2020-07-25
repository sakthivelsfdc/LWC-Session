import { LightningElement,api,wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class Demo16ContactDetails extends LightningElement {
    @api contactdetails = {Id: "003192301009134556", Name: "Sakthivel Madesh" , Title: "Salesforce Developer"};
    @wire(CurrentPageReference)pageRef;

    selectHandler(event){
        console.log('selectHandler:'+JSON.stringify(this.contactdetails));
        fireEvent(this.pageRef,'pubsubselected',this.contactdetails);
    }
}