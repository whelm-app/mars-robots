const ORIENTATIONS = {
    N: 'N' , 
    E: 'E' , 
    S: 'S' , 
    W: 'W' 
};

// would be nice to ensure they have the same API (params)
const left = position => {
    if (!position || !position.orientation) {
        throw new Error('Input orientation not provided');
    }

    const currentOrientationIndex = Object.values(ORIENTATIONS).findIndex(o => o === position.orientation.toUpperCase());
    if (currentOrientationIndex === -1) {
        throw new Error(`Unexpected input orientation: ${position.orientation}`);
    }
    const newOrientationIndex = currentOrientationIndex === 0 ? Object.values(ORIENTATIONS).length-1 : currentOrientationIndex -1;
    const newOrientation = Object.values(ORIENTATIONS)[newOrientationIndex];

    return {
        position: {
            ...position.position
        },
        orientation: newOrientation
    };
};


const right = position => {
    if (!position || !position.orientation) {
        throw new Error('Input orientation not provided');
    }

    const currentOrientationIndex = Object.values(ORIENTATIONS).findIndex(o => o === position.orientation.toUpperCase());
    if (currentOrientationIndex === -1) {
        throw new Error(`Unexpected input orientation: ${position.orientation}`);
    }
    const newOrientationIndex = (currentOrientationIndex ===  Object.values(ORIENTATIONS).length-1) ? 0 : currentOrientationIndex +1;
    const newOrientation = Object.values(ORIENTATIONS)[newOrientationIndex];

    return {
        position: {
            ...position.position
        },
        orientation: newOrientation
    };
};

const forward = position => {
    if (typeof position.position.x !== 'number') {
        throw new Error('Provided position x must be an integer');
    } else if (typeof position.position.y !== 'number') {
        throw new Error('Provided position y must be an integer');
    }

    const newPosition = {
        ...position.position
    };

    if (position.orientation === ORIENTATIONS.W) {
        newPosition.x--; 
    } else if (position.orientation === ORIENTATIONS.E) {
        newPosition.x++; 
    } else if (position.orientation === ORIENTATIONS.N) {
        newPosition.y++; 
    } else if (position.orientation === ORIENTATIONS.S) {
        newPosition.y--; 
    }

    return {
        position: newPosition,
        orientation: position.orientation
    };
};

const COMMAND_MAP = {
    'L': left,
    'F': forward,
    'R': right
};

module.exports = {
    ORIENTATIONS,
    COMMAND_MAP,
    left,
    right,
    forward
};