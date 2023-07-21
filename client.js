const net = require("net");
const constants = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP, // IP address here,
    port: constants.PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Connected.");
    conn.write("Name: AE");
  });
  return conn;
};

module.exports = {connect};
