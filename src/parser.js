const parseWorld = function(input) {
    const inputArray = input.split(' ');
    return { //FIXME: it's not width it's final co-ord!
        width: parseInt(inputArray[0], 10),
        height: parseInt(inputArray[1], 10)
    }
};

const parsePosition = function(input) {
    const inputArray = input.split(' ');
    const position = {
        x: parseInt(inputArray[0], 10),
        y: parseInt(inputArray[1], 10)
    }
    const orientation = inputArray[2];
    return {
        position,
        orientation
    };
};

const parseInstruction = function(input) {
    const inputArray = input.split('');
    return inputArray;
};

const parseAllInstructions = function(input) {
    const inputLines = input.split('\n');

    const inputLinesWithValues = inputLines.filter(line => !!line);
    
    const instructionLines = inputLinesWithValues.filter((line, i) => !(i % 2) && i);
    return instructionLines.map(line => parseInstruction(line));
};

const parseInput = function(input) {
    const inputLines = input.split('\n');
    const world = parseWorld(inputLines[0]);

    const inputLinesWithValues = inputLines.filter(line => !!line);
    
    const robotLines = inputLinesWithValues.filter((line, i) => !!(i % 2));
    const robots = robotLines.map(line => parsePosition(line));

    return {
        ...world,
        robots
    };
};


module.exports = {
    parseInstruction,
    parseAllInstructions,
    parseWorld,
    parsePosition,
    parseInput
};