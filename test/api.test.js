import { expect } from 'chai';
import { createUser, getUser, getPetsByStatus } from '../api.js';

describe('API Tests', () => {
    it('should create a new user', async () => {
        const user = await createUser('testuser', 'Test', 'User', 'test.user@testing.com', 'password123', '1234567890');
        expect(user).to.have.property('code', 200);  // Check for successful creation
    });

    it('should retrieve user data', async () => {
        const userData = await getUser('testuser');
        expect(userData).to.have.property('username', 'testuser');
        expect(userData).to.have.property('email', 'test.user@testing.com');  // Correct email
    });

    it('should get pets by status', async () => {
        const pets = await getPetsByStatus('sold');
        expect(pets).to.be.an('array');
        pets.forEach(pet => {
            expect(pet).to.have.property('status', 'sold');
        });
    });
});
