const { Worker } = require("bullmq");

const sendEmail = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const worker = new Worker("email-queue", async (job) => {
  console.log("job: ", job.id);

  console.log("processing job: ");

  console.log(`send email to ${job.data.email}`);

  await sendEmail(5000);

  return "done";
}, { connection: { host: '127.0.0.1', port: 6379 } });