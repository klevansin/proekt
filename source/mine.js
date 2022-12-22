

function usl(hesh){
   let hesh_str = `${hesh}`;
    for(let i = 0; i<hesh_str.length; i++){
        if(hesh_str[i] == '2'){
            return true
        };
    };
    return false;
};


function mine(str, r=8){
    for(let k = 0; 1>0; k++){
        let h = allhesh(str+k,r);
        if(usl(h)==true){
            return {k, h};
        };
    };
   
};