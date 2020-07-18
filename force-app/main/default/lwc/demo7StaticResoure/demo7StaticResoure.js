import { LightningElement, track } from 'lwc';
import lwcImage from '@salesforce/resourceUrl/LWC';
import lwcStyleResource from '@salesforce/resourceUrl/LWCResource';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';


export default class Demo7StaticResoure extends LightningElement {
    textVal;
    lwcImageURL = lwcImage;
    styleCss = lwcStyleResource + '/LWCStyle/css/styleSheet.css';

    winterLogo = lwcStyleResource + '/LWCStyle/image/winter20.jpg';
    springLogo = lwcStyleResource + '/LWCStyle/image/spring20.png';
    summerLogo = lwcStyleResource + '/LWCStyle/image/summer20.jpg';

    connectedCallback() {
        Promise.all([
            loadStyle(this,lwcStyleResource + '/LWCStyle/css/styleSheet.css'),
            loadScript(this,lwcStyleResource + '/LWCStyle/js/demo.js')
        ]).then(() => {
            //alert('Files loaded.');
        })
        .catch(error => {
            alert(error.body.message);
        });
    }

    renderedCallback() {
       
    }

    changeHandler(event) {
        console.log('value:'+event.target.value)
        this.textVal = event.target.value;
    }
}