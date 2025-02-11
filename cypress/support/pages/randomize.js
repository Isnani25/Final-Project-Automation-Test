import { faker } from '@faker-js/faker'

class Randomize {
    constructor() {
        this.randomName = '';
    }

    name() {
        this.randomName = faker.person.fullName();
        return this.randomName
    }

    email() {
        this.randomName = faker.person.firstName();
        return this.randomName + '@test.com';
    }

    password() {
        return this.randomName + '1234';
    }
    card_number() {
        return faker.number.int()
    }

    
}

module.exports = new Randomize();