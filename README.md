# machineAPI

Industrial machine connectivity to web service stacks done right. Get and set highly articulate machine data. Trivially easy to use. And fast!

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
