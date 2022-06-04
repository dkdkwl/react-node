const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

app.use(
	express.static(path.join(__dirname, '../react/build'))
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//모델 불러옴
const { Post } = require('./model/postSchema.js');
const { Counter } = require('./model/counterSchema.js');

app.listen(port, () => {
	mongoose
		.connect(
			'mongodb+srv://aaa:!abcd1234@cluster0.shsbo8p.mongodb.net/dcodelab?retryWrites=true&w=majority'
		)
		.then(() => {
			console.log('Server listening on port:' + port);
			console.log('mongoDB success');
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get('/', (req, res) => {
	res.sendFile(
		path.join(__dirname, '../react/build/index.html')
	);
});

app.post('/api/create', (req, res) => {
	//리액트에서 가져온 데이터에 Counter모델로부터 communityNum값을 찾아서 추가
	//이때 findOne메서드로 찾을 조건을 설정
	Counter.findOne({ name: 'counter' })
		.exec()
		.then((doc) => {
			//기존 클라이언트에서 받은 데이터에 카운터모델의 communityNum값을 추가 적용
			const PostModel = new Post({
				title: req.body.title,
				content: req.body.content,
				communityNum: doc.communityNum,
			});

			//위에서 communityNum이 추가된 모델을 DB에 저장
			PostModel.save().then(() => {
				//성공적으로 데이터 저장이 완료되면 카운터 모델을 다시 불러와서 기존 communityNum값을 1씩 증가
				Counter.updateOne(
					{ name: 'counter' },
					{ $inc: { communityNum: 1 } }
				).then(() => {
					res.status(200).json({ success: true });
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});

//게시글 요청
app.post('/api/read', (req, res) => {
	Post.find()
		.exec()
		.then((doc) =>
			res
				.status(200)
				.json({ success: true, communityList: doc })
		)
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});

//상세페이지 데이터 요청
app.post('/api/detail', (req, res) => {
	//body-parser로 넘어온 글번호는 문자열이기 때문에
	//숫자로 형변환한 다음 doc검색
	Post.findOne({ communityNum: Number(req.body.num) })
		.exec()
		.then((doc) => {
			res.status(200).json({ success: true, detail: doc });
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({ success: false });
		});
});
