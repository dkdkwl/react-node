import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HeaderWrapper = styled.header`
	width: 350px;
	height: 100vh;
	position: fixed;
	background: #222;
	top: 0px;
	left: 0%;
	padding: 70px 50px;

	h1 {
		margin-bottom: 40px;
		a {
			font: 50px/1 'arial';
			color: #fff;
		}
	}
`;

const Gnb = styled.ul`
	a {
		display: block;
		padding: 10px;
		font: bold 16px/1 'arial';
		color: #bbb;

		&:hover {
			color: hotpink;
		}
	}
`;

const Util = styled.ul`
	position: absolute;
	bottom: 10vh;
	left: 50px;
	display: flex;

	li a {
		padding: 5px 10px;
		color: #999;
	}
`;

function Header() {
	const user = useSelector((store) => store.user);
	console.log(user);

	return (
		<HeaderWrapper>
			<h1>
				<NavLink to='/'>LOGO</NavLink>
			</h1>

			<Gnb>
				<li>
					<NavLink to='/list'>Show List</NavLink>
				</li>
				{user.accessToken !== '' && (
					<li>
						<NavLink to='/create'>Write Post</NavLink>
					</li>
				)}
			</Gnb>

			{user.accessToken === '' && (
				<Util>
					<li>
						<NavLink to='/login'>Login</NavLink>
					</li>
					<li>
						<NavLink to='/join'>Join</NavLink>
					</li>
				</Util>
			)}
		</HeaderWrapper>
	);
}

export default Header;
