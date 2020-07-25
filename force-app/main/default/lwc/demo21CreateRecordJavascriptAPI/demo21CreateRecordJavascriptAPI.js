import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';


export default class Demo21CreateRecordJavascriptAPI extends LightningElement {
    accountId;
    name = '';

    handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
    }

    createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
      //   const fields = { 'Name' : this.Name,'AnnualRevenue' : 350000 , 'Active__c' : 'Yes'};
       console.log(JSON.stringify(ACCOUNT_OBJECT));
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        // promise - 
        // imperative call which always return promise
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}