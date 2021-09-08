import styled from 'styled-components'
import ImgBg from '../../../images/food.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
    background-image: url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div `
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1200px) /2);
`

export const HeroItems = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 90vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 600px;
    color: #fdd935;
    text-transform: uppercase;
    line-height: 2;
    font-weight: bold;

   @media screen and (max-width: 650px) {
    width: 100% 
}
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.5rem, 6vw, 3.1rem);
    margin-bottom: 1rem;
    box-shadow: 1px 2px #fdd935;
    letter-spacing: 1px;
    background: black;
    opacity:94%;
    border-radius:10px;
`
export const HeroP = styled.p `
    font-size: clamp(2rem, 2.3vw, 3rem);
    margin-bottom: 2rem;
`;

export const HeroBtn = styled.button `
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    padding: 1rem 4rem;
    border: none;
    background: #fdd935;
    color: black;
    transition: 0.2s ease-out;

    &:hover {
        transition: 0.1s ease-out;
        cursor: pointer;
        color: white;
    }
`
