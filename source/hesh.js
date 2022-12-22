function hesh(N, k){
    let a = ((Math.pow(N,3.2))/Math.sqrt(N));
    let h=Math.round((Math.abs(a-Math.round(a)))*Math.pow(10,k));
    return h;
};

function hesh2(M, k){
    let out = 0;
    //console.log(M,M.length);
    for(let i = 0; i < M.length ; i++){
        out = out + hesh(M[i],k);
    };
    
    return Math.round(out/M.length);
   
};

function bukvi(A){
    let out = [];
    let index = 0;
    for(let i = 0; i<A.length; i++){
        out.push(A[i].charCodeAt(index));
    };
    return out;
};

function allhesh(A, k){
    let g = hesh2(bukvi(A), k);
    return g;
};




