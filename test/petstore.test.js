import { expect } from 'chai';
import { listSoldPets, PetStore } from '../petstore.js';

describe('PetStore Tests', () => {
    it('should list sold pets', () => {
        const pets = [
            { id: 1, name: 'Buddy', status: 'sold' },
            { id: 2, name: 'Max', status: 'available' },
            { id: 3, name: 'Bella', status: 'sold' }
        ];
        const soldPets = listSoldPets(pets);
        expect(soldPets).to.deep.equal([
            { id: 1, name: 'Buddy' },
            { id: 3, name: 'Bella' }
        ]);
    });

    it('should count pet names', () => {
        const soldPets = [
            { id: 1, name: 'Buddy' },
            { id: 2, name: 'Buddy' },
            { id: 3, name: 'Bella' }
        ];
        const petStore = new PetStore(soldPets);
        const nameCount = petStore.countPetNames();
        expect(nameCount).to.deep.equal({ Buddy: 2, Bella: 1 });
    });
});
