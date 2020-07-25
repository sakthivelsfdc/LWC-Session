import { LightningElement, track } from 'lwc';

export default class Demo12PublicProperty extends LightningElement {
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
}