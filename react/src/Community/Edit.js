import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Common/Layout';

function Edit() {
	const params = useParams();
	const navigate = useNavigate();

	const [Detail, setDetail] = useState({});
	const [Title, setTitle] = useState('');
	const [Content, setContent] = useState('');
	const [Loaded, setLoaded] = useState(false);

	const onEdit = () => {
		if (Title === '' || Content === '') {
			return alert('모든 항목을 입력하세요.');
		}

		const body = {
			title: Title,
			content: Content,
			num: params.num,
		};

		axios.post('/api/community/edit', body).then((res) => {
			if (res.data.success) {
				alert('글수정이 완료되었습니다.');
				navigate(`/detail/${params.num}`);
			} else {
				alert('글수정에 실패했습니다.');
			}
		});
	};

	//처음 수정 컴포넌트 마운트시 서버쪽으로부터 글번호에 해당 하는 데이터 요청후 Detail에 저장
	useEffect(() => {
		const body = { num: params.num };
		axios
			.post('/api/community/detail', body)
			.then((res) => {
				if (res.data.success) {
					setDetail(res.data.detail);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	//Detail에 글 정보가 담기면 Title, Content값 옮겨담고 글수정폼에 내용 출력
	useEffect(() => {
		setTitle(Detail.title);
		setContent(Detail.content);
		setLoaded(true);
	}, [Detail]);

	return (
		<Layout name={'Edit Post'}>
			{Loaded ? (
				<>
					<label htmlFor='title'>Title</label>
					<br />
					<input
						type='text'
						id='title'
						value={Title || ''}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
					<br />

					<label htmlFor='content'>Content</label>
					<br />
					<textarea
						rows='8'
						id='content'
						type='text'
						value={Content || ''}
						onChange={(e) => {
							setContent(e.target.value);
						}}></textarea>
					<br />
					<div className='btnSet'>
						<button onClick={() => navigate(-1)}>CANCEL</button>
						<button onClick={onEdit}>SAVE</button>
					</div>
				</>
			) : (
				<p>Loading...</p>
			)}
		</Layout>
	);
}

export default Edit;
