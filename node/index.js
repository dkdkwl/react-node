const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

app.use(express.static(path.join(__dirname, '../react/build')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Post모델 불러옴
const { Post } = require('./model/postSchema.js');

app.listen(port, () => {
	mongoose
		.connect('mongodb+srv://aaa:!abcd1234@cluster0.shsbo8p.mongodb.net/?retryWrites=true&w=majority')
		.then(() => {
			console.log('Server listening on port:' + port);
			console.log('mongoDB success');
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../react/build/index.html'));
});

app.post('/api/create', (req, res) => {
	console.log(req.body);

	const PostModel = new Post({
		title: req.body.title,
		content: req.body.content,
	});

	PostModel.save()
		.then(() => {
			res.status(200).json({ success: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});
