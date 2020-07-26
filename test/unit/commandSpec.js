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

    describe('handles errors gracefully', function() {
        it('when orientation is lower case', function() {
            const expected = 'W';
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'n'
            };
            
            const actual = left(input);
    
            expect(expected).to.deep.equal(actual.orientation);
        });
        it('when orientation is unrecognised', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'Z'
            };
    
            expect(() => left(input)).to.throw('Unexpected input orientation');
        });

        it('when orientation is not provided', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: undefined
            };
    
            expect(() => left(input)).to.throw('Input orientation not provided');
        });
        it('ensure does not modify input', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'n'
            };

            const originalInput = {
                position: {
                    ...input.position
                },
                orientation: input.orientation
            };
            
            const actual = left(input);
    
            expect(originalInput).to.deep.equal(input);
            expect(originalInput).to.not.deep.equal(actual);
        });
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

    describe('handles errors gracefully', function() {
        it('when orientation is lower case', function() {
            const expected = 'E';
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'n'
            };
            
            const actual = right(input);
    
            expect(expected).to.deep.equal(actual.orientation);
        });
        it('when orientation is unrecognised', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'Z'
            };
    
            expect(() => right(input)).to.throw('Unexpected input orientation');
        });

        it('when orientation is not provided', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: undefined
            };
    
            expect(() => right(input)).to.throw('Input orientation not provided');
        });
        it('ensure does not modify input', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'n'
            };

            const originalInput = {
                position: {
                    ...input.position
                },
                orientation: input.orientation
            };
            
            const actual = right(input);
    
            expect(originalInput).to.deep.equal(input);
            expect(originalInput).to.not.deep.equal(actual);
        });
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

    describe('handles errors gracefully', function() {
        it('when position x is a string', function() {
            const input = {
                position: {
                    x: 'hi',
                    y: 1
                },
                orientation: 'Z'
            };
    
            expect(() => forward(input)).to.throw('Provided position x must be an integer');
        });

        it('when position y is a string', function() {
            const input = {
                position: {
                    x: 0,
                    y: 'hello'
                },
                orientation: 'Z'
            };
    
            expect(() => forward(input)).to.throw('Provided position y must be an integer');
        });

        it('ensure does not modify input', function() {
            const input = {
                position: {
                    x: 0,
                    y: 1
                },
                orientation: 'N'
            };

            const originalInput = {
                position: {
                    ...input.position
                },
                orientation: input.orientation
            };
            
            const actual = forward(input);
    
            expect(originalInput).to.deep.equal(input);
            expect(originalInput).to.not.deep.equal(actual);
        });
    });
    
});