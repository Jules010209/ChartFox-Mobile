front.send("a");

front.on("b", function(msg) {
	console.log(msg);

    $("b").html(msg);
});