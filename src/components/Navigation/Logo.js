import styled from 'styled-components';

export const ImgWrapper = styled.div`
    flex-shrink:0;
    margin-left: 30px;
    width: 2.2rem;
    @media (min-width: 340px){
      width: 3rem;
    }
    @media (min-width: 1024px){
      margin-left: 40px;
    }
`;

export const LogoImg = styled.img`
    animation: 1500ms ease 800ms 1 normal forwards running opacityContaier;
    opacity:0;
      @keyframes opacityContaier{
        0%{
            opacity: 0; 
         }
          100%{
            opacity: 1;
         }
      }
`;