# machineAPI

Industrial connectivity to web service stacks done right. Get articulate machine data fast. Trivially easy to use.

Here's how you integrate via Websocket:
```javascript
var ws = new WebSocket("ws://127.0.0.1:8000");

ws.onopen = function () {
	ws.send('{"type": "read", "data": ["mySensor"]}');
};

ws.onmessage = function (e) {
	console.log(e.data); // '{"type":"readresponse","data":[{"mySensor":false}]}'
	ws.close();
};
```
Here's what you can ask for:

```
EIPBytesFromPLC
EIPBytesToPLC
DigitalInputs
DigitalOutputs
AnalogInputs
Everything
```
