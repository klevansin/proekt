class Blocks{
    constructor(){
        this.blocks = [];
    }
    add(info){
        let block = new Block();
        let hesh;
        if(this.blocks.length===0){
            hesh = 0;
        }else{
            let last_block = this.blocks[this.blocks.length-1];
            hesh = last_block.hesh_now;
        }
        block.add(info,hesh);
        this.blocks.push(block);
    }
}