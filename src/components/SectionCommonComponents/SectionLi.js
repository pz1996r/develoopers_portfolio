import styled from 'styled-components';

const SectionLi = styled.li`
    display: inline-block;
    padding: 6px 0;
    text-indent: -16px;
    padding-left: 16px;
    &::before{
        display:inline-block;
        content: ' ';
        background-image: ${({ skillIMG }) => `url(${skillIMG})`}; 
        background-size: 11px 11px;
        height: 11px;
        width: 11px;
        margin-right: 5px;
    }
`;

export default SectionLi;