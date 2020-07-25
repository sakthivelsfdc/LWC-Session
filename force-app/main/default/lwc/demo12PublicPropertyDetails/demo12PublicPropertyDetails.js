import { LightningElement, api } from 'lwc';

export default class Demo12PublicPropertyDetails extends LightningElement {

    @api contactdetails;
    updateContactName() {
        this.contactdetails.name = 'Sakthivel Madesh';
        console.log(this.contactdetails.name);
    }

    updateContact(){
        this.contactdetails = {Id :'003171931112854371',Name:'Sakthivel Madesh',Title : 'Salesforce Developer'};
    }
}