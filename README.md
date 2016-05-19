# machineAPI

Industrial machine connectivity to web service stacks done right.

WebSocket integration via Javascript:
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
Here's what's available to read or write:

```
EIPBytesFromPLC
EIPBytesToPLC
DigitalInputs
DigitalOutputs
AnalogInputs
Everything
```
