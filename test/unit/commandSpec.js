const chai = require('chai');
const expect = chai.expect;

const { left, right, forward } = require('../../src/command');

describe('left', async function() {
    it('returns new position with orientation that corresponds to the orientation -90 degrees', async function() {
        const expected = 'S';
        const input = {
            position: {
                x: 0,
                y: 1
            },
            orientation: 'W'
        };
        
        const actual = left(input);

        expect(expected).to.deep.equal(actual.orientation);
    });

    it('returns new position with orientation that corresponds to the orientation -90 degrees even when orientation wraps around to start', async function() {
        const expected = 'W';
        const input = {
            position: {
                x: 0,
                y: 1
            },
            orientation: 'N'
        };
        
        const actual = left(input);

        expect(expected).to.deep.equal(actual.orientation);
    });

    describe.skip('handles errors gracefully', function() {
        it('when input is lower case');
        it('when input is an unknown command');
        it('ensure do not modify input');
    });
});

describe('right', async function() {
    it('returns new position with orientation that corresponds to the orientation +90 degrees', async function() {
        const expected = 'E';
        const input = {
            position: {
                x: 0,
                y: 1
            },
            orientation: 'N'
        };
        
        const actual = right(input);

        expect(expected).to.deep.equal(actual.orientation);
    });

    it('returns new position with orientation that corresponds to the orientation +90 degrees even when orientation wraps around to start', async function() {
        const expected = 'N';
        const input = {
            position: {
                x: 0,
                y: 1
            },
            orientation: 'W'
        };
        
        const actual = right(input);

        expect(expected).to.deep.equal(actual.orientation);
    });
});


describe('forward', async function() {
    context('when orientation is W', function() {
        it('returns new position with x-1', async function() {
            const input = {
                position: {
                    x: 2,
                    y: 2
                },
                orientation: 'W'
            };
            const expected = input.position.x-1;
            
            const actual = forward(input);
    
            expect(expected).to.deep.equal(actual.position.x);
        });
    });

    context('when orientation is E', function() {
        it('returns new position with x+1', async function() {
            const input = {
                position: {
                    x: 2,
                    y: 2
                },
                orientation: 'E'
            };
            const expected = input.position.x+1;
            
            const actual = forward(input);
    
            expect(expected).to.deep.equal(actual.position.x);
        });
    });

    context('when orientation is N', function() {
        it('returns new position with y+1', async function() {
            const input = {
                position: {
                    x: 2,
                    y: 2
                },
                orientation: 'N'
            };
            const expected = input.position.y+1;
            
            const actual = forward(input);
    
            expect(expected).to.deep.equal(actual.position.y);
        });
    });

    context('when orientation is S', function() {
        it('returns new position with y-1', async function() {
            const input = {
                position: {
                    x: 2,
                    y: 2
                },
                orientation: 'S'
            };
            const expected = input.position.y-1;
            
            const actual = forward(input);
    
            expect(expected).to.deep.equal(actual.position.y);
        });
    });
    
});