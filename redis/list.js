const client = require("./client");

async function init() {
//   await client.lpush('message','hello from redis');
//   await client.lpush("message", "hello bhai");

  const result = await client.lrange("message", 0,1);
  console.log("result: ", result);

  const result1 = await client.rpop("message");

  const result2 = await client.get("msg:2");

  console.log("result1: ", result1);
  console.log("result2: ", result2);
}

init();
