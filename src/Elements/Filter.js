import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	background-color: #f8f7fa;
	margin-bottom: 10px;
	max-width: 400px;
`;

export const Form = styled.form`
	display: flex;
	> button {
		background: transparent;
		color: #2b6cb0;
		font-weight: 600;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border-width: 1px;
		border-color: #4299e1;
		border-radius: 0.25rem;
		font-size: 100%;
		cursor: pointer;
		margin-left: 0.75rem;

		&:hover {
			background-color: #4299e1;
			color: #fff;
			border-color: transparent;
		}
	}
`;
export const Select = styled.select`
 appearance-none w-full   border-gray-400 hover:border-gray-500 px-4  shadow   

    display:block;
    line-height:1.25;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right:2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color:#fff;
    color:#2b6cb0;
    border-width: 1px;
    border-color:#4299e1;
	border-radius: 0.25rem;
    border-radius: 0.25rem;
    font-weight:600;
    font-size:100%;
    cursor:pointer;

    &:hover{
        border-color: #4299e1;
        border-width:2px;
    }
    &:focus{
        outline:none;
        shadow:outline;
    }
	option {
		color: #000;
		text-transform: capitalize;
	}
`;

export const Input = styled.input``;

export const Button = styled.button`
	background: transparent;
	color: #2b6cb0;
	font-weight: 600;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	border-width: 1px;
	border-color: #4299e1;
	border-radius: 0.25rem;
	font-size: 100%;
	cursor: pointer;

	margin-left: 0.75rem;

	&:hover {
		background-color: #4299e1;
		color: #fff;
		border-color: transparent;
	}
`;

export const Label = styled.label`
	font-size: 1rem;
	line-height: 1.75rem;
	letter-spacing: .25px;
	margin-right: -.25px;
	padding: 10px 16px;
	font-weight: 700;
`;

export const Title = styled.div`
	font-size: 1.25rem;
	line-height: 1.75rem;
	letter-spacing: .25px;
	margin-right: -.25px;
	padding: 10px 16px;
	font-weight: 700;
`;
