/**
 * Filters and lists sold pets.
 * @param {Array} pets - The list of pets.
 * @returns {Array} - The list of sold pets in the format {id, name}.
 */
export function listSoldPets(pets) {
    if (!Array.isArray(pets)) {
        throw new Error('Pets should be an array');
    }

    return pets
        .filter(pet => pet.status === 'sold')
        .map(pet => ({ id: pet.id, name: pet.name }));
}

/**
 * Represents a PetStore.
 * @constructor
 * @param {Array} soldPets - The list of sold pets.
 */
export class PetStore {
    constructor(soldPets) {
        if (!Array.isArray(soldPets)) {
            throw new Error('SoldPets should be an array');
        }

        this.soldPets = soldPets;
    }

    /**
     * Counts the number of pets with the same name.
     * @returns {Object} - An object where the keys are pet names and values are their counts.
     */
    countPetNames() {
        const nameCount = {};
        this.soldPets.forEach(({ name }) => {
            nameCount[name] = (nameCount[name] || 0) + 1;
        });
        return nameCount;
    }
}
