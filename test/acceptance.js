const fsPromise = require('fs').promises;
const chai = require('chai');
const expect = chai.expect;

const { calculateRobotPosition } = require('../src');

describe.skip('calculateRobotPosition', async function() {
    let sampleInput, sampleOutput;

    before(async function() {
        sampleInput = await fsPromise.readFile('test/data/main/input.txt', 'utf8');
        sampleOutput = await fsPromise.readFile('test/data/main/output.txt', 'utf8');
    });

    it('returns the sample output when provided with the sample input', async function() {
        const actual = calculateRobotPosition(sampleInput);

        expect(sampleOutput).to.equal(actual);
    });    
});
