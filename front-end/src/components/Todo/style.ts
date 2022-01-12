import styled from 'styled-components';

export const container = styled.div `
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    .container {
        display: flex;
        justify-content: space-between;
        border: 1px solid ${props => props.theme.colors.background};;
        background: ${props => props.theme.colors.secundary};
        box-shadow: 0.25px 0.25rem 0.25rem 0.25rem rgba(17, 76, 116, 0.2);
        padding: 1rem;
        border-radius: 0.25rem;
        margin-bottom: 0.20rem;
    }
    .container button {
        background: none;
        border: none;
        cursor: pointer
    }

    .container button img {

    }
    
    .container p {
        font-family: 'Poppins', sans-serif;
        word-break: break-word;
    }
`;