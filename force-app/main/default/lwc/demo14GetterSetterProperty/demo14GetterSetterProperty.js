import { LightningElement, api } from 'lwc';

export default class Demo14GetterSetterProperty extends LightningElement {
    firstName = '';
    lastName = '';
    fullName = '';

    handleNameChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
        this.fullName = this.firstName + ' '+this.lastName;
    }

    @api
    get upperCasename(){
        return this.fullName.toUpperCase();
    }

    set upperCasename(value){
        this.fullName = value;
    }
}