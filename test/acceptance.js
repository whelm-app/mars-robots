const fsPromise = require('fs').promises;
const chai = require('chai');
const expect = chai.expect;

const { calculateRobotPosition } = require('../src');

describe('calculateRobotPosition', async function() {

    context('with simple 1 robot test case', function() {
        let sampleInput, sampleOutput;

        before(async function() {
            sampleInput = await fsPromise.readFile('test/data/main/input-single-robot.txt', 'utf8');
            sampleOutput = await fsPromise.readFile('test/data/main/output-single-robot.txt', 'utf8');
        });
    
        it('returns the sample output when provided with the sample input', async function() {
            const actual = calculateRobotPosition(sampleInput);
    
            expect(sampleOutput).to.equal(actual);
        });
    });

    context('with multiple robots, ignoring bounds, test case', function() {
        let sampleInput, sampleOutput;

        before(async function() {
            sampleInput = await fsPromise.readFile('test/data/main/input-multiple-robots-ignore-bounds.txt', 'utf8');
            sampleOutput = await fsPromise.readFile('test/data/main/output-multiple-robots-ignore-bounds.txt', 'utf8');
        });
    
        it('returns the sample output when provided with the sample input', async function() {
            const actual = calculateRobotPosition(sampleInput);
    
            expect(sampleOutput).to.equal(actual);
        });
    });

    context('with full test case', function() {
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
    
});
