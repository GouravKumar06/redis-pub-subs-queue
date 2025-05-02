const {Queue} = require('bullmq');

const notificationQueue = new Queue('email-queue');

async function init(){
    const res = await notificationQueue.add('hello from redis',{
        email: 'gourav@gmail.com',
        subject:"welcome",
        body:"hello"
    });

    console.log("add to the queue: ",res.id);
}

init();