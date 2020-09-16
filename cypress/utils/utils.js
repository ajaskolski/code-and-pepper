const faker = require('faker');

export const createUserData = (gender) => {
    return {
        name: faker.name.firstName(gender),
        address: faker.address.streetName(),
        postcode: faker.address.zipCode(),
        email: faker.internet.email(),
    }
};
