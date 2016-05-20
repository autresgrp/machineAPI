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
Here's the data available to read or write from the API side:

```
BridgeData.
	DI[18]
	DO[8]
	AI[2]
	Float[50]
	Bool[50]
	Int[50]

FromPLC.
	Real[50]
	Int[50]
	Bool[100]

ToPLC.
	Real[50]
	Int[50]
	Bool[100]

BridgeStatus.	
	APIVersion
	FirmwareVersion
	PLCOnline
	MachineSideIP
	webIP
	Error.
	   ErrorNumber
	   ErrorDescription
	Config.
		NewWebIP
		NewMachineSideIP

Everything
```
