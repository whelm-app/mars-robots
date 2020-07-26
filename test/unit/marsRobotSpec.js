const chai = require('chai');
const expect = chai.expect;

const { parseWorld, parsePosition, parseInstruction } = require('../../src');

describe('parseInstruction', async function() {
    it('returns a robot instruction when provided with a valid input line', async function() {
        const expected = ['L', 'L', 'F', 'R'];
        const input = expected.join('');
        
        const actual = parseInstruction(input);

        expect(expected).to.deep.equal(actual);
    });

    describe.skip('handles errors gracefully', function() {
        it('when input is lower case');
        it('when input is over 50 instructions');
        it('when input contains commands that do not match known commands');
    });
});

describe('parsePosition', async function() {
    it('returns a robot position when provided with a valid input line', async function() {
        const x = 3;
        const y = 5;
        const orientation = 'N';
        const input = `${x} ${y} ${orientation}`;
        
        const actual = parsePosition(input);

        const expectedOutput = {
            position: {
                x,
                y
            },
            orientation
        };

        expect(expectedOutput).to.deep.equal(actual);
    });

    describe.skip('handles errors gracefully', function() {
        it('when input is delimited with tabs');
        it('when input has extra data after required input');
        it('when input is missing fields');
        it('when input is not 2 integers and a char');
        it('when orientation does not match known orientations');
    });
});

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

describe.skip('parseInput', function() {
    it('when there is no world line');
    it('when there is a robot position without instruction set');
    it('when there is a instruction set without robot position');
    it('when robot co-ordinates are not within world area');
});
