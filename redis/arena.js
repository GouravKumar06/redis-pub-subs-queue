const Arena = require("bull-arena");
const { Queue } = require("bullmq");

Arena(
  {
    BullMQ: Queue,
    queues: [
      {
        name: "email-queue", // 🔥 This must match your queue name
        hostId: "Email Queue Dashboard",
        type: "bullmq",
        redis: {
          host: "127.0.0.1", // Or your Redis host
          port: 6379,
        },
      },
    ],
  },
  {
    port: 4567,
    disableListen: false,
  }
);
