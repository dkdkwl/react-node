import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';
import firebase from '../firebase';

function Login() {
	const navigate = useNavigate();
	const [Email, setEmail] = useState('');
	const [Pw, setPw] = useState('');
	//상황별 에러메세지가 담길 state추가
	const [Err, setErr] = useState('');

	//로그인 인증 유무 함수 정의
	const handleLogin = async () => {
		if (!Email || !Pw) return alert('모든 값을 입력하세요');

		try {
			await firebase.auth().signInWithEmailAndPassword(Email, Pw);
			navigate('/');
		} catch (err) {
			console.log(err);
			if (err.code === 'auth/user-not-found')
				setErr('존재하지 않는 이메일입니다.');
			else if (err.code === 'auth/wrong-password')
				setErr('비밀번호 정보가 일치하지 않습니다.');
			else setErr('로그인에 실패했습니다.');
		}
	};
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
			<button onClick={handleLogin}>LOGIN</button>
			<button onClick={() => navigate('/join')}>JOIN</button>
			{Err !== '' && <p>{Err}</p>}
		</Layout>
	);
}

export default Login;
