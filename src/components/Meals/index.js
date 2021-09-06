import React from 'react'
import {
    MealsContainer,
    MealsHeading,
    MealWrapper,
    MealCard,
    MealImg,
    MealInfo,
    MealTitle,
    MealDesc,
    MealPrice,
    MealButton
} from './MealsElements';

const Meals = ({ heading, data }) => {
    return (
        <MealsContainer>
            <MealsHeading>{heading}</MealsHeading>
            <MealWrapper>
                {data.map((meal, index) =>{
                    return (
                        <MealCard key={index}>
                            <MealImg src={meal.img} alt={meal.alt} />
                            <MealInfo>
                                <MealTitle>{meal.name}</MealTitle>
                                <MealDesc>{meal.desc}</MealDesc>
                                <MealPrice>{meal.price}</MealPrice>
                                <MealButton>{meal.button}</MealButton>
                            </MealInfo>
                        </MealCard>
                    )
                })}
            </MealWrapper>
        </MealsContainer>
    )
}

export default Meals