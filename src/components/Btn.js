import styled from 'styled-components';

const Btn = styled.a`
    font-size: 1rem;
    display: inline-block;
    border: ${({ second, theme }) => second ? `1px solid ${theme.colors.tertiary}` : `1px solid ${theme.colors.secondary}`}; 
    color: ${({ second, theme }) => second ? theme.colors.tertiary : theme.colors.secondary}; 
    background: ${({ second, theme }) => second ? theme.colors.tertiaryTransparent : theme.colors.secondaryTransparent}; 
    border-radius: 3px;
    transition: .3s ease-out;
    cursor: hand;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 12px;
    outline:none;

    &:hover{
        cursor: pointer;
        background: ${({ second, theme }) => second ? theme.colors.tertiaryHover : theme.colors.secondaryHover}; 
    }
`;

export default Btn;