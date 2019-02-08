import { Component } from '@angular/core';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: [
        './people.component.css',
    ]
    /*
        // other option to add style, but it is less used, recommended for some lines
        styles: [
            `
                h1{
                    color: brown
                }
            `
        ]
    */
})

export class PeopleComponent{
    addPerson = false;
    addPersonStatus = "Not added person.";
	personTitle = "Master";
	personCreated = false;



    constructor(){
        // set a function
        setTimeout(
            () => {
                this.addPerson = true;
            },
            3000);

    }

    onAddPerson(){
		this.addPersonStatus = "Person Added!";
		this.personCreated = true;
    }

    onEditPerson(event:Event){
        this.personTitle = (<HTMLInputElement>event.target).value;
    }

}