const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (buff) => {
  console.log(buf.toString('utf-8', 0, 1).charCodeAt());
  console.log(buf.toString('utf-8', 1, 2).charCodeAt()); 
  console.log(buf.toString('utf-8', 2, 3).charCodeAt());
  console.log(buf.toString('utf-8', 3, 4).charCodeAt());
  console.log(buf.toString('utf-8', 4, 5).charCodeAt());
  console.log(buf.toString('utf-8', 5, 6).charCodeAt());
  console.log('buffer is converted')
});
myEmitter.emit('event', buf);