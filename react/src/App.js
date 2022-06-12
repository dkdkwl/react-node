import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './Styles/GlobalStyles';

import Header from './Common/Header';
import Main from './Main';
import List from './Community/List';
import Create from './Community/Create';
import Detail from './Community/Detail';
import Edit from './Community/Edit';
import Login from './User/Login';
import Join from './User/Join';

import firebase from './firebase';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './redux/userSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		//auth상태 변화를 감지해서 인수로 해당 상태값을 전달
		firebase.auth().onAuthStateChanged((userInfo) => {
			console.log('userInfo', userInfo);

			if (userInfo !== null) {
				dispatch(loginUser(userInfo.multiFactor.user));
			} else {
				dispatch(logoutUser());
			}
		});
	}, []);

	useEffect(() => {
		firebase.auth().signOut();
	}, []);

	return (
		<>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/list' element={<List />} />
				<Route path='/create' element={<Create />} />
				<Route path='/detail/:num' element={<Detail />} />
				<Route path='/edit/:num' element={<Edit />} />

				<Route path='/login' element={<Login />} />
				<Route path='/join' element={<Join />} />
			</Routes>
		</>
	);
}

export default App;
