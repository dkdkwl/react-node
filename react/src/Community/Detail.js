import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Common/Layout';
import styled from 'styled-components';

function Deatil() {
	//라우터 파라미터로 전달된 값 받음
	//미션 - params로 받은 글 번호로 상세 글 화면 출력 (52분까지)
	const params = useParams();

	const [Detail, setDetail] = useState(null);

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

	const DetailView = styled.div`
		width: 100%;
		background: #fff;
		padding: 40px;
	`;

	return (
		<Layout name={'Detail'}>
			{/* Detail값이 비어있지 않을때 화면 출력 */}
			{Detail && (
				<DetailView>
					<h2>{Detail.title}</h2>
					<p>{Detail.content}</p>
				</DetailView>
			)}
		</Layout>
	);
}

export default Deatil;
