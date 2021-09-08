import styled from 'styled-components'

export const MealsContainer = styled.div `
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: black;
    color: white;
`

export const MealWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const MealCard = styled.div `
    margin: 0.6rem;
    line-height: 1.2;
    width: 300px;
`

export const MealImg = styled.img `
    height: 310px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 6px 6px #fdd935;
    border-radius: 40px;
    
    &:hover{
        opacity: 70%;
    }
`

export const MealsHeading = styled.h1 `
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`
export const MealTitle = styled.h2 `
    font-weight: 750;
    font-size: 1.1rem;
    text-transform: uppercase;
`

export const MealInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const MealDesc = styled.p `
    margin-bottom: 1rem;
    font-size: 1.3rem;
`
export const MealPrice = styled.p `
    margin-bottom: 1rem;
    font-size: 1.1rem;
`

export const MealButton = styled.button `
    font-size: 0.7rem;
    font-weight: 850;
    padding: 0.9rem 3.5rem;
    border: none;
    background: #fdd935;
    color: black;
    text-transform: uppercase;
    transition: 0.2 ease-out;

    &:hover {
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #fff;
    }
`