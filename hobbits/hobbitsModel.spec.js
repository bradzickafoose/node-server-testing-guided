const Hobbits = require('./hobbitsModel');
const db = require('../data/dbConfig');

describe('hobbits model', function () {

    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('insert()', function () {

        it('should add the hobbit to the database', async function () {
            // call insert, passing a hobbit object
            await Hobbits.insert({ name: 'Sam' });
            await Hobbits.insert({ name: 'Gaffer' });

            // check the database directly
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });
    });
});