import styled from 'styled-components';

const Btn = styled.a`
    font-size: 1rem;
    display: inline-block;
    border: ${({ second, theme }) => second ? `1px solid ${theme.colors.seaColor}` : `1px solid ${theme.colors.purple}`}; 
    color: ${({ second, theme }) => second ? theme.colors.seaColor : theme.colors.purple}; 
    background: ${({ second, theme }) => second ? theme.colors.seaColorBtn : theme.colors.purpleBtn}; 
    border-radius: 3px;
    transition: .3s ease-out;
    cursor: hand;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 12px;
    outline:none;

    &:hover{
        cursor: pointer;
        background: ${({ second, theme }) => second ? theme.colors.seaColorBtnHov : theme.colors.purpleBtnHov}; 
    }
`;

export default Btn;