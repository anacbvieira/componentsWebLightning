import { LightningElement, api} from 'lwc';

import { reduceErrors } from 'c/ldsUtils';

import getRelatedContacts from '@salesforce/apex/AccountController.getRelatedContacts';


export default class CallApexImperative extends LightningElement {
    @api recordId;
    errors;

    handleButtonClick() {
        getRelatedContacts({
            accountId: '$recordId'
        })
        .then(contacts => {
            //code to execute if related contacts are returned successfully
        })
        .catch(error => {
            this.errors = reduceErrors(error);
        });
    }
}