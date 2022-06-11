import styled from 'styled-components';

const Main = styled.main`
	width: calc(100% - 350px);
	min-height: 100vh;
	float: right;

	.inner {
		width: 100%;
		padding: 60px;
		padding-top: 70px;

		h1 {
			font: normal 40px/1 'arial';
			color: #444;
			margin-bottom: 30px;
		}

		section {
			label {
				font: 16px/1 'arial';
				color: #555;
				margin-bottom: 10px;
				display: block;
			}
			input[type='text'],
			textarea {
				width: 50%;
				min-width: 300px;
				padding: 5px 8px;
				border: 1px so lid #999;
				margin-bottom: 20px;
				resize: none;
				display: block;
			}
			button {
				display: inline-block;
				padding: 5px 20px;
				background: #555;
				color: #fff;
				cursor: pointer;
				border: none;
			}
		}
	}
`;

function Layout({ children, name }) {
	return (
		<Main>
			<div className='inner'>
				<h1>{name}</h1>

				<section>{children}</section>
			</div>
		</Main>
	);
}

export default Layout;
