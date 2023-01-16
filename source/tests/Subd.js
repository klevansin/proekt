class Subd{
    constructor(engine){
        this.engine = engine;    
    }
    add(data){
      this.engine.add(data);
    }
    del(index){
        this.engine.del(index);
    }
    get(index){
        return this.engine.get(index);
    }
}