import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './Styles/GlobalStyles';

import Header from './Common/Header';
import Main from './Main';
import List from './Community/List';
import Create from './Community/Create';
import Detail from './Community/Detail';
import Edit from './Community/Edit';

function App() {
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
			</Routes>
		</>
	);
}

export default App;
