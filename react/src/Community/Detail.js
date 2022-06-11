import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Common/Layout';
import styled from 'styled-components';

function Deatil() {
	//라우터 파라미터로 전달된 값 받음
	const params = useParams();
	const navigate = useNavigate();
	const [Detail, setDetail] = useState(null);

	const onDelete = () => {
		if (!window.confirm('정말 삭제하겠습니까')) return;
		const body = {
			num: params.num,
		};

		axios
			.post('/api/community/delete', body)
			.then((res) => {
				if (res.data.success) {
					alert('게시글이 삭제 되었습니다.');
					navigate('/list');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		//params의 글번호를 post요청시 같이 전달
		const body = {
			num: params.num,
		};

		axios
			.post('/api/community/detail', body)
			.then((res) => {
				if (res.data.success) {
					console.log(res.data.detail);
					setDetail(res.data.detail);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		console.log(Detail);
	}, [Detail]);

	const DetailView = styled.div`
		width: 100%;
		background: #fff;
		padding: 40px;
	`;

	return (
		<Layout name={'Detail'}>
			{/* Detail값이 비어있지 않을때 화면 출력 */}
			{Detail && (
				<>
					<DetailView>
						<h2>{Detail.title}</h2>
						<p>{Detail.content}</p>
					</DetailView>

					<ul className='btns'>
						<li>
							<Link to={`/edit/${Detail.communityNum}`}>Edit</Link>
						</li>
						<li onClick={onDelete}>Delete</li>
					</ul>
				</>
			)}
		</Layout>
	);
}

export default Deatil;
