import { LightningElement, track } from 'lwc';

export default class Demo11PrivateReactiveProperty extends LightningElement {
    @track contacts = [
        {
            Id: '003171931112854371',
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: '003171931112854372',
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: '003171931112854373',
            Name: 'Jennifer Wu',
            Title: 'CEO',
        }
    ];

    updateContact(){
        this.contacts[0].Name = 'Sakthivel Madesh';
        this.contacts[0].Title = 'Salesforce Developer';
    }
}