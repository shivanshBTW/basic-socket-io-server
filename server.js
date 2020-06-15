const io = require('socket.io')();

io.on('connection', (client) => {
  console.log('connection made');
  io.emit('connect', 'connection established');
  // client.on('messageSent', (messageObj) => {
  //   // socketasdad[messageObj] = io.sockets;
  //   console.log(`${messageObj.username} sent a message: ${messageObj.text}`);
  //   io.emit('messageReceived', messageObj);
  // });
  client.on('user_joined', (user) => {
    console.log('user joined', user);
  });
  client.on('disconnect', function () {
    console.log('CONNECTION LOST');
    //this.socket = io.connect(this.socket_url);
  });
  client.on('request_data', () => {
    io.emit('new_event_occurred', {
      gg: '44',
    });
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
