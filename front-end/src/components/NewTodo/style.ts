import styled from 'styled-components';

export const container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    input {
        border-radius: 0.25rem;
        padding: 0.625rem;
        border: 0;
        outline: 0;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.secundary};
        border: 1px solid ${props => props.theme.colors.secundary};
        font-size: 1.125rem;
        box-shadow: 0px 0.5rem 0.5rem 0.25rem rgba(17, 76, 116, 0.1);
        width: 50vw;
    }
`;