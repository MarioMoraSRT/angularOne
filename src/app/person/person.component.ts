import { Component } from '@angular/core';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})

export class PersonComponent {
    name:string = 'Mario';
    lastname:string = 'Mora';
    private age:number = 22; // private attribute

    getAge(){
        return this.age;
    }


    /*
        people = [
            {
                name: 'Mario',
                lastname: 'Mora',
                age: 22
            },
            {
                name: 'Anyi',
                lastname: 'Senteno',
                age: 21
            },
            {
                name: 'Perla',
                lastname: 'Perez',
                age: 26
            },
            {
                name: 'Angelica',
                lastname: 'Lopez',
                age: 24
            },
            {
                name: 'Yahel',
                lastname: 'Perez',
                age: 20
            },
        ]
    */

}
