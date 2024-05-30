const EventEmitter = require("events");
const event = new EventEmitter();
event.on("hey", () => {
  console.log("namste");
});
event.emit("hey");
