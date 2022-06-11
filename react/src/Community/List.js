import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Common/Layout';
import styled from 'styled-components';

function List() {
	const [List, setList] = useState([]);

	useEffect(() => {
		axios
			.post('/api/community/read')
			.then((res) => {
				if (res.data.success) {
					console.log(res.data.communityList);
					setList(res.data.communityList);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const Lists = styled.article`
		width: 100%;
		padding: 30px;
		background: #fff;
		margin-bottom: 30px;
	`;

	return (
		<Layout name={'List'}>
			{List.map((post, idx) => (
				<Lists key={post._id}>
					<h2>
						{/* 각 제목 라우터 링크로 글 고유번호 추가 */}
						<Link to={`/detail/${post.communityNum}`}>{post.title}</Link>
					</h2>
				</Lists>
			))}
		</Layout>
	);
}

export default List;
