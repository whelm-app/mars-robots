const parser = require('./parser');
const command = require('./command');

const isBecomingLost = (position, world, alreadyLost) => {
    return !alreadyLost && (position.x > world.width || position.y > world.height);
}

const findMatchingScent = (scents, position) => {
    return scents.find(s => s.x === position.x && s.y === position.y);
}

const applyInstructions = (world, instructions) => {
    const scents = [];
    return world.robots.map((robot, i) => {
        const instructionList = instructions[i];

        return instructionList.reduce((previousPosition, instruction) => {
            const commandFn = command.COMMAND_MAP[instruction];
            let newPosition = commandFn(previousPosition);
            
            let becomingLost = isBecomingLost(newPosition.position, world, previousPosition.lost);
            
            if (becomingLost) {
                const matchingScent = findMatchingScent(scents, newPosition.position); 
                if (matchingScent) {
                    newPosition = previousPosition;
                    becomingLost = false;
                } else {
                    scents.push(newPosition.position);
                }
            }

            return {
                ...newPosition,
                lost: previousPosition.lost || becomingLost
            };
        }, robot);
    });
}

const calculateRobotPosition = function(input) {
    const world = parser.parseInput(input);
    const instructions = parser.parseAllInstructions(input);

    const outputPositions = applyInstructions(world, instructions); 

    return outputPositions.map(position => {
        const lost = position.lost ? ' LOST': '';
        return `${position.position.x} ${position.position.y} ${position.orientation}${lost}`;
    }).join('\n');
};

module.exports = {
    calculateRobotPosition
};