# machineAPI

Industrial machine connectivity to web service stacks done right.

### cURL Example Request:
```javascript
curl --data '["bridgeIO.digitalInput[0]"]' http://10.0.1.1/var_read.cgi
```
### Response:
```javascript
[{"bridgeIO.digitalInput[0]":false}]
```

## WebSocket integration via Javascript:
### Request:
```javascript
// Use websockets to read a variable

// Create a new websocket connection and connect to the target
var ws = new WebSocket("ws://10.0.1.1:8000");

// When the connection is opened send some data
ws.onopen = function () {
	ws.send('{"type": "read", "data": ["bridgeIO.digitalInput[0]"]}');
};

// When we receive the data we should process it
ws.onmessage = function (e) {

	// Log the data to the browser console
	console.log("Websocket Response");
	console.log(e.data);

	// Close the connection if we are done sending data
	ws.close();
};
```
### Response:
```javascript
{"type":"readresponse","data":[{"bridgeIO.digitalInput[0]":false}]}
```

## Http integration with AJAX via Javascript:

### Request:
```javascript
// Use HTTP to read a variable-->
// NOTE: For ajax to work it must be served from the bridge Server

// Use jquery ajax wrapper
$.ajax({

	// Call to var_read.cgi service on the host
	url: 'var_read.cgi',

	// Create an array with the variables you want to read
	// Use JSON.stringify to convert that array to a string
	data: JSON.stringify(['bridgeIO.digitalInput[0]']),

	// Use post to send data to the server
	type: 'POST',

	// Data should be transmitted as a JSON String
	dataType: 'JSON',

	// Timeout of 1 second
	timeout: 1000,

	// Callback for when data is returned
	success: function (response, status, xhr) {

		//Log the response to the console
		console.log('ajax Response');
		console.log(JSON.stringify(response));

	},

	// Callback if there is an error
	error: function (xhr, status, errorThrown) {
		console.dir(xhr);
	}
});
```
### Response:
```javascript
[{"bridgeIO.digitalInput[0]":false}]
```



Here's the data available to read or write from the API side:

```
"plc": {
 "status": 0,
   "fromPLC": {
     "Real": [50],
     "Int":[50],
     "Bool": [128]
   },
   "toPLC": {
     "Real": [50],
     "Int":[50],
     "Bool": [128]
     }
}
"bridgeStatus": {
  "APIVersion": "1.0",
  "firmwareVersion": "f5dc852",
  "SerialNumber": 169099,
  "PLCOnline": false,
  "machineSideIP": "192.168.10.10",
  "webSideIP": "10.0.1.4",
  "ValidKey": true
}
"bridgeIO": {
  "digitalInput": [18],
  "digitalOutput": [12],
  "analogInput": [2]
}
```
