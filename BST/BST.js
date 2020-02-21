class Node{
constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
}

}
class BST {
    constructor(){
        this.root=null;
    }

    insert(value){
        if(this.root== null){
            const newNode = new Node(value);
            this.root=newNode;
        }
        else{
            if(value < this.value){
                if(this.left == null){
                    
                }
            }
        }
    }
}