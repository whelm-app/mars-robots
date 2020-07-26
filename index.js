const fsPromise = require('fs').promises;
const { program } = require('commander');

const marsRobots = require('./src');

const run = async () => {
    program.requiredOption('-f, --filePath <string>', 'File path to parse for input');

    program.parse(process.argv);

    try {
        const hardcodedInput = await fsPromise.readFile(program.filePath, 'utf8'); // could make encoding a parm
        const output = marsRobots.calculateRobotPosition(hardcodedInput);
        console.log(output);
    } catch (e) {
        console.error(`Failed to read in ${program.filePath} - please try again`);
    }
    
}
run();