import { LightningElement,api,wire,track } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Industry';

//const allFields = ['Account.Name','Account.AnnualRevenue','Account.Industry'];

export default class Demo22LoadRecord extends LightningElement {
    @api recordId;
    @api objectApiName = ACCOUNT_OBJECT;
    // 
    @wire(getRecord, { recordId: '$recordId', fields : [NAME_FIELD,REVENUE_FIELD,INDUSTRY_FIELD, RATING_FIELD]})
    myRecord;

    get nameValue() {
        console.log(JSON.stringify(this.myRecord));
        return this.myRecord.data ? getFieldValue(this.myRecord.data, NAME_FIELD) : '';
    }

    get industryValue() {
        return this.myRecord.data ? getFieldValue(this.myRecord.data, INDUSTRY_FIELD) : '';
    }

    get revenueValue() {
        return this.myRecord.data ? getFieldValue(this.myRecord.data, REVENUE_FIELD) : '';
    }
    

    get ratingValue() { 
        return this.myRecord.data ? getFieldValue(this.myRecord.data, RATING_FIELD) : '';
    }

    handleSubmit(event){
        //event.preventDefault();       // stop the form from submitting
        console.log()
        //this.template.querySelector('lightning-record-form').submit(fields);
     }
}