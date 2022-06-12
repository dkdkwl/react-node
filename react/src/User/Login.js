import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';

function Login() {
	const navigate = useNavigate();
	const [Email, setEmail] = useState('');
	const [Pw, setPw] = useState('');

	return (
		<Layout name='LOGIN'>
			<input
				type='email'
				value={Email}
				placeholder='이메일을 입력하세요'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<input
				type='password'
				value={Pw}
				placeholder='비밀번호를 입력하세요'
				onChange={(e) => setPw(e.target.value)}
			/>
			<br />
			<button>LOGIN</button>
			<button onClick={() => navigate('/join')}>JOIN</button>
		</Layout>
	);
}

export default Login;
