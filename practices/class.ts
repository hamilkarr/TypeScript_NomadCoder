interface User {
    firstName: string;
    lastName: string;
    sayHi(name: string): string;
    fullName(): string;
}

interface Human {
    health: number;
}

class Player implements User, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return `Hello ${name}, my name is ${this.fullName()}`;
    }
}
