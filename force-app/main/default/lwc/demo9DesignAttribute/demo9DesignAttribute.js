import { LightningElement, api } from 'lwc';

export default class Demo9DesignAttribute extends LightningElement {

    @api fullName ='Sakthivel Madesh';
    @api sessionTitle ='Welcome to LWC Session';
    @api displayImage =false;
    @api imgUrl ='';

}