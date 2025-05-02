const express = require('express');
const axios = require('axios');
const client = require('./client');
const app = express();

app.get('/', async(req, res) => {

    const cacheValue = await client.get('todos');

    if(cacheValue){
        return res.json(JSON.parse(cacheValue));
    }

    const {data} = await axios('https://jsonplaceholder.typicode.com/todos')

    if(data){
        await client.set('todos',JSON.stringify(data));
    }

    await client.expire('todos',20);

    return res.json(data);
});

app.listen(8000, () => {
    console.log('Server started on port 8000');
})