class Node {
    constructor(x, y, parentNode = null){
        this.x = x;
        this.y = y;
        this.parentNode = parentNode;
        
        this.moveArray = [[2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]];
    }

    //returns coordinates of node as 2 element array
    getCoordinates(){
        return [this.x, this.y];
    }

    //returns array of possible move nodes
    generateNodes(parentNode, visitedNodes){
        let nodeArray = [];
        let visitedNodeFlag;


        for (let i = 0; i < 8; i++) {
            let x = this.getCoordinates()[0] + this.moveArray[i][0];
            let y = this.getCoordinates()[1] + this.moveArray[i][1];
            let newNode = new Node(x,y, parentNode);

            if(visitedNodes.some((e) => e.checkForNodeMatch(newNode))){
            }else if (x <= 7 && y <= 7 && x >=0 && y >= 0){
                nodeArray.push(newNode);
            }

        }
        return nodeArray;
    }

    //returns true is nodes are a match
    checkForNodeMatch(targetNode){
        return this.x === targetNode.x && this.y === targetNode.y;
    }


}

function knightMoves(startNode, targetNode){
    let visitedNodes = [];
    let queue = [startNode];
    let unvisitedNodes;

    while(!queue[0].checkForNodeMatch(targetNode)){
        // generate nodes off of current node (first in queue)
        unvisitedNodes = queue[0].generateNodes(queue[0], visitedNodes);

        //for all of the new nodes, push them onto queue
        unvisitedNodes.forEach((e) => {
            queue.push(e);
        })

        //take current node off queue and push it into visited nodes
        visitedNodes.push(queue.shift());
    }


    let currentNode = queue[0];
    let counter = 0;
    let parentStack = [];

    while(currentNode.parentNode !== null){
        parentStack.unshift(currentNode);
        currentNode = currentNode.parentNode;
        counter++;
    }
    parentStack.unshift(currentNode);
    counter++;


    console.log(`You made it in ${counter} moves! Here's your path:`);
    parentStack.forEach((e) => {
        console.log(`[${e.x},${e.y}]`);
    })

 
}

let rootNode = new Node(0,0);
let targetNode = new Node(7, 7);


// console.log(rootNode.generateNodes());
// console.log(rootNode.checkForNodeMatch(targetNode));
// console.log(rootNode.checkForNodeMatch(rootNode));
let listOfMovesTest = knightMoves(rootNode, targetNode)
