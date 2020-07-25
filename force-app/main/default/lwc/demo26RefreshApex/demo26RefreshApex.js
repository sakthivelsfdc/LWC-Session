import { LightningElement,wire } from 'lwc';
import getAccountTypes from '@salesforce/apex/AccountController.getAccountTypes';
import updateAccountType from '@salesforce/apex/AccountController.updateAccountType';
import { refreshApex } from '@salesforce/apex';

export default class Demo26RefreshApex extends LightningElement {

    @wire(getAccountTypes) getAccountTypes;

    handleClick(event){
        updateAccountType()
        .then(() =>{
            console.log('Account Updated');
            return refreshApex(this.getAccountTypes);
        }).catch((error) => {
           // error
        });
    }
}