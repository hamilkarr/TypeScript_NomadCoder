"use strict";
class User {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Player extends User {
    getNickname() {
        console.log(this.nickname);
    }
}
const nico = new Player('Nico', 'Hernandez', 'NicoHernandez');
console.log(nico.getFullName()); // Nico Hernandez
