const back = require('androidjs').back;

back.on("a", function() {
	back.send("b", "Bienvenue dans Chart Fox");
});