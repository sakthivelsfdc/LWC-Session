import { LightningElement } from 'lwc';
import Id from '@salesforce/user/Id';
import guestUser from '@salesforce/user/isGuest';

export default class Demo8CurrentUserInfo extends LightningElement {
    userId = Id;
    isGuestUser = guestUser;
}