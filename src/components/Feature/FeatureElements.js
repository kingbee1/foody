import styled from 'styled-components'
import FeaturePic from '../../images/featured1.jpg'

export const FeatureContainer = styled.div `
       background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)); 
       background-image: url(${FeaturePic});
       height: 80vh;
       max-height: 350px;
       background-position: center;
       background-size: cover;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       color: #fff;
       text-align: center;
       padding: 0 1rem;

       h1 {
           font-size: clamp(3rem, 5vw, 5rem);
       }

       p {
           margin-bottom: 1rem;
           font-size: clamp(1rem, 3vw, 2rem);
       }
`
export const FeatureButton = styled.button `
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 750;
    padding: 0.9rem 3.2rem;
    border: none;
    background: #fdd935;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;