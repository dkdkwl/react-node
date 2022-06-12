import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export default configureStore({
	reducer: {
		//userSlice를 통해서 반환된 loginUser, logoutUser함수중에서 전달되는 action객체에 따라 user키값에 저장되 되면서 store생성
		user: userSlice,
	},
});
