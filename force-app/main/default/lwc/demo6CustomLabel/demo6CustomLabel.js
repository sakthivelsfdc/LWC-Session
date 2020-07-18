import { LightningElement } from 'lwc';
import welcomeLWCTitle from '@salesforce/label/c.welcomeLWCTitle';
import welcomeLWCMessage from '@salesforce/label/c.welcomeLWCMessage';


export default class Demo6CustomLabel extends LightningElement {

    label = {
                welcomeLWCTitle,
                welcomeLWCMessage 
            };
    
}