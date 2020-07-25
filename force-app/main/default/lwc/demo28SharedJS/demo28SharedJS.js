import { LightningElement } from 'lwc';
import {add, sub} from 'c/calcUtils';

export default class Demo28SharedJS extends LightningElement {
    firstNo;
    secondNo;
    addValue;
    subValue;
    mulValue;
    divValue;

    handleChange(event) {
        if(event.target.name =='Number1') {
            this.firstNo = event.target.value;
        }
        if(event.target.name =='Number2') {
            this.secondNo = event.target.value;
        }
    }

    handleAdd() {
        //this.addValue = parseInt(this.firstNo) + parseInt(this.secondNo);
        this.addValue = add(parseInt(this.firstNo),parseInt(this.secondNo));
        
    }

    handleSub() {
        //this.subValue = parseInt(this.firstNo) - parseInt(this.secondNo);
        this.subValue = sub(parseInt(this.firstNo),parseInt(this.secondNo));

    }

    handleMul() {
        this.mulValue = parseInt(this.firstNo) * parseInt(this.secondNo);
    }

    handleDiv() {
        this.divValue = parseInt(this.firstNo) / parseInt(this.secondNo);
    }

}