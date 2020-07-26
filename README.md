# Problem: Martian Robots 
## To run:

    npm start -- -f <FILEPATH>

replacing <FILEPATH> with the path to the file you want to use as input

## To test:

    npm test


## If I had more time:
- height and width are actually end coordinates(!), and should be renamed accordingly
- I didn't get time to implement most of the validation tests I wanted to; so I've 
stubbed out the ones I thought of as I built it and left them in but skipped. Ideally I'd build these out
and I'm pretty sure there are a few I missed - e.g. over 100 length strings for instructions.
- I also didn't have time to test all of the methods that I refactored out from the main methods - they 
are mostly covered by other tests but it'd be good to have the separate coverage also to understand better
what's failing when they do fail later on (during a project).
- Ideally the main acceptance test would run against the overall API (e.g. `./index.js` not `src/index.js`), 
it's more of an integration test at the moment but was still useful for me as I built it out.
- There's quite a lot of duplication (esp. in `command.js`); it could be useful to pull some of that out, 
for readability as well as simplifying maintenance.
- I thought about using a reduce instead of a map to not build up the scents array as a side effect, but 
it can make the whole process harder to follow so I left it. I'd be tempted to try and tidy it up this way if 
I had more time.
- There are a few APIs that would benefit from typing; the map->reduce refactor in the previous point would, 
and it'd be great to ensure that all of the commands have the same API as they are treated as interchangeable.


## The Problem 
The surface of Mars can be modelled by a rectangular grid around which robots are able to
move according to instructions provided from Earth. You are to write a program that
determines each sequence of robot positions and reports the final position of the robot.

A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by
y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).

A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the instructions:
- Left : the robot turns left 90 degrees and remains on the current grid point.
- Right : the robot turns right 90 degrees and remains on the current grid point.
- Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.
The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

There is also a possibility that additional command types may be required in the future and
provision should be made for this.
Since the grid is rectangular and bounded (…yes Mars is a strange planet), a robot that
moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that
prohibits future robots from dropping off the world at the same grid point. The scent is left at
the last grid position the robot occupied before disappearing over the edge. An instruction to
move “off” the world from a grid point from which a robot has been previously lost is simply
ignored by the current robot.

## The Input 
The first line of input is the upper-right coordinates of the rectangular world, the lower-left
coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of robot positions and instructions (two lines per
robot). A position consists of two integers specifying the initial coordinates of the robot and
an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a
string of the letters “L”, “R”, and “F” on one line.
Each robot is processed sequentially, i.e., finishes executing the robot instructions before the
next robot begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.

## The Output
For each robot position/instruction in the input, the output should indicate the final grid
position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST”
should be printed after the position and orientation.

## Sample Input
```
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
```

## Sample Output
```
1 1 E
3 3 N LOST
2 3 S
```