import styled, { css } from 'styled-components';

const defaultListStyling = css`
    padding-inline-start: 0; 
    display: flex;
    list-style: none;
    font-size: .9rem;
    font-weight:400;
    @media (min-width: 340px){
        font-size: 1rem;
    }

    @media (min-width: 1024px){
        margin-right: 20px;
    }
`;
export const List = styled.ul`
    ${defaultListStyling};
    margin-left: auto;
    align-items: center;
    width:${({ noMobile }) => noMobile ? 'initial' : 0};
    overflow:hidden;
    @media(min-width:640px){
        width: initial;
    }
`;

const LiDefault = styled.li`
    position: relative;
    text-decoration: none;
    &:hover{
          color: ${({ theme }) => theme.colors.purple};
    }
`;

export const Li = styled(LiDefault)`
    transform: translate(0, -40px);
    opacity: 0;
    animation: show-li 250ms forwards;
    animation-delay: ${({ delay }) => delay ? `${delay}ms` : null};
    & a{
      padding: 10px 20px;
    }
  @keyframes show-li{
    0%{
        transform: translate(0,-40px);
        opacity: 0; 
    }
    20%{
        transform: translate(0,-40px);
        opacity: 0.2;  
    }
    80%{
        opacity: 1;  
    }
    100%{
        transform: translate(0,0);
        opacity: 1;
    }
}
`;