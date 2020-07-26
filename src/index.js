const parser = require('./parser');
const command = require('./command');

module.exports = {
    calculateRobotPosition: function(input) {
        const world = parser.parseInput(input);

        const instructions = parser.parseAllInstructions(input);

        return world.robots.map((robot, i) => {
            const instructionList = instructions[i];

            const out = instructionList.reduce((acc, val) => {
                const fn = command.COMMAND_MAP[val];
                const newPosition = fn(acc);

                return newPosition;
            }, robot);

            return `${out.position.x} ${out.position.y} ${out.orientation}`;
        }).join('\n');

    }
};