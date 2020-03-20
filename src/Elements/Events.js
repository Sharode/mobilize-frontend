import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 67%;
	margin: 15px 0 15px 15px;
`;

export const EventContainer = styled.section`
	background-color: #f8f7fa;
	margin-top: 10px;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
`;

export const EventCard = styled.div`
	display: flex;
	width: 60%;
	margin: auto;
	padding: 20px;
	border-radius: 10px;
	position: relative;

	&:hover {
		background-color: #fff;
		bow-shadow: 0 20px 60px rgba(0, 0, 0, 1.25);
	}
`;

export const EventDetails = styled.div`
	color: #000;
	padding: 5px;
	margin: 10px;

	> h2 {
		color: #6f7287;
		font-size: 1rem;
		margin-bottom: 10px;
		font-weight: 500px;
	}
	> h3 {
		color: #d1410c;
		font-size: 14px;
		margin-bottom: 10px;
		font-weight: 700px;
	}
	> a {
		text-decoration: none;
		font-weight: 600;
		color: #39364f;
		font-size: 1.25rem;
	}
	> p {
		font-size: 0.85rem;
		font-weight: 400;
		color: #6f7287;
		&.location {
			color: yellow;
		}
	}
	> span {
		margin-left: 2px;
		margin-right: 2px;
	}
`;

export const Img = styled.div`
	width: 200px;
	height: 200px;
	top: 0px;
	left: 0px;
	background-image: url(${(props) => props.url});
	background-size: cover;
	background-repeat: no-repeat;
`;
