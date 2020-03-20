import styled from 'styled-components';

export const EventWrapper = styled.section`
	max-width: 600px;
	margin: auto;
`;

export const EventPage = styled.div`
	color: #000;
	padding: 5px;
	margin: 10px;

	> h1 {
		font-size: 1.5rem;
		margin-bottom: 10px;
		font-weight: 500px;
	}
	> h2 {
		color: #6f7287;
		font-size: 1rem;
		margin-bottom: 10px;
		font-weight: 500px;
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
	}
`;

export const InnerDetails = styled.div`
	display: flex;
	flex-direction: column;
	> img {
		width: 60%;
		height: 60%;
	}
	> div {
		padding: 10px;
		margin: 5px;
	}
`;
