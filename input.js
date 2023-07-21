const MOVEMENT = {
	w: "Move: up",
	a: "Move: left",
	s: "Move: down",
	d: "Move: right"
}

let connection = undefined

const handleUserInput = function (key) {
	if (key === "\u0003") {
		process.exit();
	}
	else if(MOVEMENT[key] && connection)
	{
		connection.write(MOVEMENT[key])	
	}
	if (key === 'k') {
		connection.write("Say: Hello!")
	}
};

const setupInput = function (conn) {
	const stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.setEncoding("utf8");
	stdin.resume();
	stdin.on("data", handleUserInput);
	if (conn) connection = conn;
	return stdin;
};


module.exports = {setupInput}
