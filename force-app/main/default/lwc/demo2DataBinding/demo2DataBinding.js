import { LightningElement, track } from 'lwc';

export default class Demo2DataBinding extends LightningElement {

    greeting = 'Welcome Lightning Web Component';

    firstName = '';
    lastName = '';
    @track fullName = { firstName : '', lastName : ''};
    @track fullNameWithTrack = { firstName : '', lastName : ''};
        
    handleNameChange(event) {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }


    handleFullNameChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
        this.fullName.firstName = this.firstName;
        this.fullName.lastName = this.lastName;
        //this.fullName = { firstName :this.firstName, lastName :this.lastName};
        
    }

    handleButtonClick(event) {
        console.log(event.target.label);
        
        /*
        var singleInputValue=this.template.querySelector("lightning-input");
        this.firstName=singleInputValue.value;
        console.log(singleInputValue.value);
        this.fullName.firstName = this.firstName;
        */

        var inputValue=this.template.querySelectorAll("lightning-input");
        inputValue.forEach(function(element){
            if(element.name=="firstName")
                this.firstName=element.value;
            else if(element.name=="lastName")
                this.lastName=element.value;
        },this);

        this.fullName.firstName = this.firstName;
        this.fullName.lastName = this.lastName;

    }
    
    changeFirstName(){
        this.fullNameWithTrack.firstName = 'Welcome';
        this.fullNameWithTrack.lastName = 'LWC';
    }
}