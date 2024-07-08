import { createUser, getUser, getPetsByStatus } from './api.js';
import { listSoldPets, PetStore } from './petstore.js';

(async () => {
    try {
        // Create a new user
        const user = await createUser('testuser', 'Test', 'User', 'testuser@example.com', 'password123', '1234567890');
        console.log('User created:', user);

        // Retrieve user data
        const userData = await getUser('testuser');
        console.log('User data:', userData);

        // Get sold pets
        const pets = await getPetsByStatus('sold');
        const soldPets = listSoldPets(pets);
        console.log('Sold pets:', soldPets);

        // Create PetStore instance and count pet names
        const petStore = new PetStore(soldPets);
        const nameCount = petStore.countPetNames();
        console.log('Pet name counts:', nameCount);
    } catch (error) {
        console.error('Error:', error);
    }
})();
