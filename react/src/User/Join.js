import Layout from '../Common/Layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//firebase 불러오기
import firebase from '../firebase';

function Join() {
	const navigate = useNavigate();
	const [Email, setEmail] = useState('');
	const [Pw1, setPw1] = useState('');
	const [Pw2, setPw2] = useState('');
	const [Name, setName] = useState('');

	const handleJoin = async () => {
		if (!Name || !Email || !Pw1 || !Pw2) {
			return alert('모든 양식을 입력하세요');
		}
		if (Pw1 !== Pw2) {
			return alert('두개의 비밀번호를 동일하게 입력하세요');
		}

		//위의 조건을 통과해서 회원가입을 하기 위한 정보값을 변수에 할당
		//이때 await문으로 firebase를 통해서 인증 완료후  다음 코드가 동작되도록 동기처리
		let createdUser = await firebase
			.auth()
			.createUserWithEmailAndPassword(Email, Pw1);

		//반환된 user정보값에 displayName이라는 키값으로 사용자이름 추가 등록
		await createdUser.user.updateProfile({
			displayName: Name,
		});

		//위의 유저정보가 firebase를 통해서 성공적으로 전돨되면 동기적으로 해당 정보값 콘솔로 출력
		console.log(createdUser.user);
	};

	return (
		<Layout name={'JOIN MEMBER'}>
			<label htmlFor='email'>E-MAIL</label>
			<input
				type='email'
				value={Email}
				placeholder='이메일 주소를 입력하세요.'
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />

			<label htmlFor='pwd'>PASSWORD</label>
			<input
				type='password'
				value={Pw1}
				placeholder='비밀번호를 입력하세요.'
				onChange={(e) => setPw1(e.target.value)}
			/>
			<br />

			<label htmlFor='pwd2'>RE-PASSWORD</label>
			<input
				type='password'
				value={Pw2}
				placeholder='비밀번호를 재 입력하세요.'
				onChange={(e) => setPw2(e.target.value)}
			/>
			<br />

			<label htmlFor='displayName'>USER NAME</label>
			<input
				type='text'
				value={Name}
				placeholder='사용자 이름을 입력하세요'
				onChange={(e) => setName(e.target.value)}
			/>
			<br />

			<button onClick={handleJoin}>회원가입</button>
		</Layout>
	);
}

export default Join;
