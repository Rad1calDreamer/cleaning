require('module-alias/register');
const http = require('http'),
	cleaningAPI = require('@cleaningAPI'),
	cleaningServer = http.Server(cleaningAPI),
	cleaningPORT = process.env.PORT || 3001,
	LOCAL = '0.0.0.0';
cleaningServer.listen(cleaningPORT, LOCAL, () => console.log(`cleaningAPI running on ${cleaningPORT}`));