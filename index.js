class Node {
    constructor(x, y){
        this.x = x;
        this.y = y;
        
        this.moveArray = [[2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]]
    }

    getCoordinates(){
        return [this.x, this.y];
    }

    generateNodes(){
        let nodeArray = [];

        for (let i = 0; i < 8; i++) {
            let x = this.getCoordinates()[0] + this.moveArray[i][0];
            let y = this.getCoordinates()[1] + this.moveArray[i][1];
            if (x <= 7 && y <= 7){
                nodeArray.push([x, y]);
            }
        }
        return nodeArray;
    }

    checkForNodeMatch(targetNode){
        return this.x === targetNode.x && this.y === targetNode.y;
    }
}

function knightMoves(rootNode, targetNode){
    let currentNode = new Node;
    
    while (!checkForNodeMatch(targetNode, currentNode)){

    }
}

let rootNode = new Node(7,3);
let targetNode = new Node(0, 0);


console.log(rootNode.generateNodes());
console.log(rootNode.checkForNodeMatch(targetNode));
console.log(rootNode.checkForNodeMatch(rootNode));
