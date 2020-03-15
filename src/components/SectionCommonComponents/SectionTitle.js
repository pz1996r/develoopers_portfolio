import styled, { css } from 'styled-components';

const responsiveBigText = css`
font-size: 1.4rem;
    @media (min-width: 640px){
        font-size: 2.2rem;
    }
`;

const SectionTitle = styled.h4`
    ${responsiveBigText};
    padding: 32px 0;
    &::before{
        display:inline-block;
        content: '${({ beforeValue }) => beforeValue}';
        color: ${({ theme }) => theme.colors.purple};  
        color: ${({ beforeValue }) => beforeValue + 'eee'};
        margin-right:6px;
        margin-right: 6px;
    }
`;

export default SectionTitle;

