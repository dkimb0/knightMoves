class Node {
    constructor(coordinates, parentNode = null){
        this.x = coordinates[0];
        this.y = coordinates[1];

        //parentNode to find way back to start
        this.parentNode = parentNode;
    }

    checkForNodeMatch(targetNode){
        return this.x === targetNode.x && this.y === targetNode.y;
    }


}

function knightMoves(coordinateStart, coordinateTarget){
    
    if(coordinateStart[0] > 7 || coordinateStart[1] > 7 ||
        coordinateTarget[0] > 7 || coordinateTarget[1] > 7){
            console.log('error: coordinates out of range');
            return 
        }


    let moveArray = [[2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]];
    let visitedNodes = [];

    let startNode = new Node(coordinateStart);
    let targetNode = new Node(coordinateTarget);
    //queue acts as unvisited nodes list
    let queue = [startNode];


    while(!queue[0].checkForNodeMatch(targetNode)){
        // generate nodes off of current node (first in queue)        
        moveArray.forEach((e) => {
            //apply all 8 possible moves from starting point
            let x = queue[0].x + e[0];
            let y = queue[0].y + e[1];
            //set up new nodes with current node as parent node
            let newNode = new Node([x, y], queue[0]);

            if(visitedNodes.some((e) => e.checkForNodeMatch(newNode))){
                //if node already has been visited, don't add to queue
            }else if (x <= 7 && y <= 7 && x >=0 && y >= 0){
                //only add to queue if within gameboard
                queue.push(newNode);
            }
        })

        //remove current node from queue and push it into visited nodes
        visitedNodes.push(queue.shift());
    }

    //printing results
    let currentNode = queue[0];
    let counter = 0;
    let moveStack = [];

    while(currentNode.parentNode !== null){
        moveStack.unshift(currentNode);
        currentNode = currentNode.parentNode;
        counter++;
    }
    //one last time since loop will end when parentNode becomes null
    moveStack.unshift(currentNode);
    counter++;


    console.log(`You made it in ${counter} moves! Here's your path:`);
    moveStack.forEach((e) => {
        console.log(`[${e.x},${e.y}]`);
    })
}

knightMoves([0,0], [7,8]);
