const ORIENTATIONS = {
    N: 'N' , 
    E: 'E' , 
    S: 'S' , 
    W: 'W' 
};

const left = position => {
    const currentOrientationIndex = Object.values(ORIENTATIONS).findIndex(o => o === position.orientation);
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
    const currentOrientationIndex = Object.values(ORIENTATIONS).findIndex(o => o === position.orientation);
    const newOrientationIndex = currentOrientationIndex === 0 ? currentOrientationIndex +1 : 0;
    const newOrientation = Object.values(ORIENTATIONS)[newOrientationIndex];

    return {
        position: {
            ...position.position
        },
        orientation: newOrientation
    };
};

const forward = position => {
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
module.exports = {
    ORIENTATIONS,
    left,
    right,
    forward
};