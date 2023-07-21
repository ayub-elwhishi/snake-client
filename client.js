const net = require("net");

const connect = function () {
	const conn = net.createConnection({
		host: "10.0.2.15", // IP address here,
		port: 50541, // PORT number here,
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	conn.on("data", (data) => {
		console.log("Server says: ", data);
	});

	conn.on("connect", () => {
		console.log("Connected.");
	});
	return conn;
};

module.exports = {connect}
