/* eslint-disable eqeqeq */
/* eslint-disable no-await-in-loop */
// import strToHash from './hash/hash';
import server from './server';
import { mine } from './mining/mine';

/*
export default async function _saveToServer(Di) {
    const res = await server.prepare(Di);

    console.log('id', res.ID);
    let h = await server.getPrevHash(res.ID);
    while (h == false) {
        h = await server.getPrevHash(res.ID);
    }
}
*/

export default async function saveToServer(Di, ID_CLIENT) {
    const prepare = await server.prepare(Di, ID_CLIENT);

    console.log('id', prepare.ID);

    let prevHash = await server.getPrevHash(prepare.ID);
    while (prevHash == false) {
        await server.delay();
        prevHash = await server.getPrevHash(prepare.ID);
    }
    console.log('prevHash', prevHash);

    const block = mine(Di + prevHash.HASH, 8);

    console.log(block);

    const out = await server.commit(prepare.ID, block.hash, block.i);
    // while (out == 0) {
    //    await server.delay();
    //    out = await server.commit(prepare.ID, block.hash, block.i);
    // }
}
