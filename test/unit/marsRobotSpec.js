const chai = require('chai');
const expect = chai.expect;

const { parseWorld, parsePosition, parseInstruction, parseInput } = require('../../src');

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

describe('parseInput', function() {
    context('when provided with valid input', function() {
        let height, width, input;
        let robot1x, robot1y, robot1Orientation;
        let robot2x, robot2y, robot2Orientation;
        let actual;

        before(function(){
            height = 6;
            width = 2;
            robot1x = 0;
            robot1y = 3;
            robot1Orientation = 'N';
            robot2x = 1;
            robot2y = 1;
            robot2Orientation = 'S';
            const worldLine = `${width} ${height}`;
            const robot1PositionLine = `${robot1x} ${robot1y} ${robot1Orientation}`;
            const robot1InstructionLine = `LLL`;
            const robot2PositionLine = `${robot2x} ${robot2y} ${robot2Orientation}`;
            const robot2InstructionLine = `FRF`;
        
            input = `${worldLine}

${robot1PositionLine}
${robot1InstructionLine}

${robot2PositionLine}
${robot2InstructionLine}`;

            actual = parseInput(input);
        });

        it('sets up height correctly', function() {
            expect(height).to.equal(actual.height);
        });

        it('sets up width correctly', function() {
            expect(width).to.equal(actual.width);
        });

        it('sets up robot 1 correctly', function() {
            const robot1 = actual.robots[0];
            expect(robot1.position.x).to.equal(robot1x);
            expect(robot1.position.y).to.equal(robot1y);
            expect(robot1.orientation).to.equal(robot1Orientation);
        });

        it('sets up robot 2 correctly', function() {
            const robot2 = actual.robots[1];
            expect(robot2.position.x).to.equal(robot2x);
            expect(robot2.position.y).to.equal(robot2y);
            expect(robot2.orientation).to.equal(robot2Orientation);
        });

    });

    it('when there is no world line');
    it('when there is a robot position without instruction set');
    it('when there is a instruction set without robot position');
    it('when robot co-ordinates are not within world area');
    it('when there are extra blank lines');
});
