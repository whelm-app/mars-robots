const chai = require('chai');
const expect = chai.expect;

const { parseWorld } = require('../../src');

describe('parseWorld', async function() {
    it('returns a world object when provided with a valid input line', async function() {
        const height = 3;
        const width = 5;
        const input = `${width} ${height}`;
        const actual = parseWorld(input);

        const expectedOutput = {
            width,
            height
        };

        expect(expectedOutput).to.deep.equal(actual);
    });

    describe.skip('handles errors gracefully', function() {
        it('when input is delimited with tabs');
        it('when input has extra data after required input');
        it('when input is missing fields');
        it('when input is not 2 integers');
    });
});
