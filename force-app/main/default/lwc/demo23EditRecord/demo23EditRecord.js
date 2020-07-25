import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c';

export default class Demo23EditRecord extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [NAME_FIELD, REVENUE_FIELD, PHONE_FIELD, ACTIVE_FIELD];
}