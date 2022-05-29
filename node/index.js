const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, '../react/build')));

app.listen(port, () => {
	console.log('Server listening on port:' + port);
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../react/build/index.html'));
});
