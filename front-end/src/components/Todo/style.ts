import styled from 'styled-components';

export const container = styled.div `
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    .container {
        display: flex;
        justify-content: space-between;
        border: 1px solid #131010;
        background: ${props => props.theme.colors.secundary};
        padding: 1rem;
        border-radius: 0.25rem;
        
    }
    .container button {
        background: none;
        border: none;
        cursor: pointer
    }
    
    .container p {
        font-family: 'Poppins', sans-serif;
    }
`;