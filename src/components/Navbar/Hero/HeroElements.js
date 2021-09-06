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
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 600px;
    color: yellow;
    text-transform: uppercase;
    line-height: 2;
    font-weight: bold;

   @media screen and (max-width: 650px) {
    width: 100% 
}
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px yellow;
    letter-spacing: 3px;
`
export const HeroP = styled.p `
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;

export const HeroBtn = styled.button `
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem 4rem;
    border: none;
    background: #ffc500;
    color: black;
    transition 0.2s ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.1s ease-out;
        cursor: pointer;
        color: white;
    }
`
