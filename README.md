# Relay Train

Relay train is a Websocket solution to share messages between a group of clients. A leader client can create a room where messages can be broadcasted towards other clients and where non-leader clients can forward messages to the leader.

Relay Train can work in a standalone mode, or it can work in a cluster.

Under the hood, Relay Train uses Socket.io

## Getting started

To get started, make sure you have NodeJS installed. Only Node 16+ has been tested with Relay Train.

The project consist of multiple sub-projects. Please consult each sub-project README.md for more details on how they operate.

- server: Contains the server implementation of Relay Train

## License

Relay Train is distributed under the AGPL 3 license. Please take the time to read the license file.
