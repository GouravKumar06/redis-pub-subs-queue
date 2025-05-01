import { createClient } from 'redis';

const client = createClient();


async function main(){
    await client.connect();
    while(1){
        const result = await client.brPop('submissions',0);

        await new Promise(resolve => setTimeout(resolve, 1000));

        //send it to the pub sub 
        console.log("result",result);
    }
}


main()