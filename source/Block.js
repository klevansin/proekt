class Block{
    constructor(){
        this.info = '';
        this.hesh_prev = '';
        this.hesh_now = '';
        this.k = '';
    }
    add(info, hesh_prev){
        if ( (this.hesh_now !='') ){
            this.info=info;
            this.hesh_prev=hesh_prev;
            let hesh_mine=mine(this.info+this.hesh_prev);
            this.hesh_now = hesh_mine.h;
            this.k = hesh_mine.k;
        }
    }
    valid(){
        if(this.hesh_now===mine(this.info+this.hesh_prev).h){
            return true;
        }else{
            return false;
        };
    }
} 
