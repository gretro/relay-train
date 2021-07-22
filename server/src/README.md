# Relay Train Server

Relay train is a Websocket solution to share messages between a group of clients. A leader client can create a room where messages can be broadcasted towards other clients and where non-leader clients can forward messages to the leader.

Relay Train can work in a standalone mode, or it can work in a cluster.

Under the hood, Relay Train uses Socket.io

## What is this component?

This is the Relay Train server component.

This is the component in charge of running the communication layer of Relay Train. It can run in `standalone` mode or it can work in `cluster` mode, which requires additional components to work properly.

## Getting started

1. Run `npm install` to install all dependencies.
2. Run `npm start` to start a dev server.
3. You can use the Web API on `localhost:3000`.

## NPM scripts

- `build`: Builds the server and outputs the code in the `dist` folder
- `lint`: Runs the linter
- `start`: Runs the server in standalone mode with a watcher on the `src` folder
- `test`: Runs unit tests
- `prettier`: Formats the code found in the `src` folder
