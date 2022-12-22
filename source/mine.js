function usl(hash) {
    const hashStr = `${hash}`;
    for (let i = 0; i < hashStr.length; i++) {
        if (hashStr[i] == '2') {
            return true;
        }
    }
    return false;
}

function mine(str, r = 8) {
    for (let k = 0; 1 > 0; k++) {
        const h = strToHash(str + k, r);
        if (usl(h) == true) {
            return { k, h };
        }
    }
}
