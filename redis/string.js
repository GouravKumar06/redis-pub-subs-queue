const client = require('./client');

async function init(){
    // await client.set('msg:1','hello from redis');
    // await client.set('msg:2','hello from redis');

    await client.expire('msg:1',20);
    const result1 = await client.get('msg:1');
    const result2 = await client.get('msg:2');

    console.log("result1: ",result1);
    console.log("result2: ",result2);
}

init();