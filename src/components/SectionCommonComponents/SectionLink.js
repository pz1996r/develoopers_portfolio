import styled from 'styled-components';

export const SectionLink = styled.a`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};  
    text-decoration: none;
`;

export default SectionLink;