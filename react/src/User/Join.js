import Layout from '../Common/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Join() {
	const navigate = useNavigate();
	const [Email, setEmail] = useState('');
	const [Pw1, setPw1] = useState('');
	const [Pw2, setPw2] = useState('');
	const [Name, setName] = useState('');

	return (
		<Layout name={'JOIN MEMBER'}>
			<input
				type='email'
				value={Email}
				placeholder='이메일 주소를 입력하세요.'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />

			<input
				type='password'
				value={Pw1}
				placeholder='비밀번호를 입력하세요.'
				onChange={(e) => setPw1(e.target.value)}
			/>
			<br />

			<input
				type='password'
				value={Pw2}
				placeholder='비밀번호를 재 입력하세요.'
				onChange={(e) => setPw2(e.target.value)}
			/>
			<br />

			<input
				type='text'
				value={Name}
				placeholder='사용자 이름을 입력하세요'
				onChange={(e) => setName(e.target.value)}
			/>
			<br />

			<button>회원가입</button>
		</Layout>
	);
}

export default Join;
