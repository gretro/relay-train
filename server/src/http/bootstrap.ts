import express from 'express';
import { Server } from 'node:http';
import sockIO from 'socket.io';

export const expressApp = express();
const httpServer = new Server(expressApp);

export const io = new sockIO.Server(httpServer);

expressApp.get('/', (_, response) => {
  response.json({ message: 'PING!' });
});

export function start(): Server {
  return httpServer.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on *:3000');
  });
}
