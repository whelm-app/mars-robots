module.exports = {
    calculateRobotPosition: function() {},
    parseWorld: function(input) {
        const inputArray = input.split(' ');
        return {
            width: parseInt(inputArray[0], 10),
            height: parseInt(inputArray[1], 10)
        }
    },
    parsePosition: function(input) {
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
    }
};