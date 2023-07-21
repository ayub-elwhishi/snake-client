const client = require("./client");
const input = require("./input");

// establishes a connection with the game server

console.log("Connecting...");
const conn = client.connect();
const stdin = input.setupInput(conn);
