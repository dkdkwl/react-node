import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [tit, setTit] = useState('');
	const [con, setCon] = useState('');

	const handleCreate = () => {
		const item = {
			title: tit,
			content: con,
		};

		axios
			.post('/api/create', item)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {}, []);

	return (
		<section>
			<label htmlFor='tit'>Title</label>
			<br />
			<input type='text' id='tit' value={tit} onChange={(e) => setTit(e.target.value)} />
			<br />

			<label htmlFor='con'>Content</label>
			<br />
			<textarea id='con' value={con} onChange={(e) => setCon(e.target.value)}></textarea>
			<br />
			<button onClick={handleCreate}>SEND</button>
		</section>
	);
}

export default App;
