//redux toolkit에서 제공하는 createSlice를 이용하면 reducer의 action, payload값을 편하게 전달가능
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		displayName: '',
		uid: '',
		accessToken: '',
	},

	reducers: {
		//firebase로 받은 유저정보를 action객체로 반환하는 함수
		//해당 함수의 인수값으로 변경될 정보를 인수로 넣으면 2번째 action파라미터로 전달됨
		loginUser: (state, action) => {
			state.displayName = action.payload.displayName;
			state.uid = action.payload.uid;
			state.accessToken = action.payload.accessToken;
		},

		//로그아웃 처리를 위해서 유저 정보를 강제로 비워서 action객체로 반환해주는 함수
		logoutUser: (state) => {
			state.displayName = '';
			state.uid = '';
			state.accessToken = '';
		},
	},
});

//crateSlice메서드로 생성한 2개의 loginUser, logoutUser액션생성 함수를 내보냄
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
