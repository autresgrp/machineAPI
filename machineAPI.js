(function () {

	$(document).ready(function () {

		$('#btn-go').click(function () {

			var ws = new WebSocket("ws://127.0.0.1:8000");

			ws.onopen = function () {
				ws.send('{"type": "read", "data": ["mySensor"]}');
			};

			ws.onmessage = function (e) {
				console.log(e.data); // '{"type":"readresponse","data":[{"mySensor":false}]}'
				ws.close();
			};

		});

	});
	// document.ready

}());
// closure