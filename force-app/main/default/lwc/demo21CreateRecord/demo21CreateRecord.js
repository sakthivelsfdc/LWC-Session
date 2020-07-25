import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class Demo21CreateRecord extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    myFields = [NAME_FIELD, WEBSITE_FIELD];
    nameField = NAME_FIELD;
    websiteField = WEBSITE_FIELD;
    accountId;


    handleAccountCreated(event){
        console.log('>>>'+JSON.stringify(event.detail));
        console.log('Account Created'+event.detail.id);
    }
}