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

	useEffect(() => {}, []);

	return (
		<Layout name={'Edit Post'}>
			<label htmlFor='title'>Title</label>
			<br />
			<input
				type='text'
				id='title'
				value={Title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<br />

			<label htmlFor='content'>Content</label>
			<br />
			<textarea
				id='content'
				type='text'
				value={Content}
				onChange={(e) => {
					setContent(e.target.value);
				}}></textarea>
			<br />
		</Layout>
	);
}

export default Edit;