import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiMeal } from "react-icons/gi";

export const Nav = styled.nav`
    background: transparent;
    height: 90px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
color: #fdd935;
font-size: 2.4rem;
display: flex;
align-items: center;
text-decoration: none;
cursor:pointer;

@media screen (max-width: 400px) {
    position: absolute;
    
    top: 10px;
    left: 25px;
}
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fdd935;

p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`

export const Bars = styled(GiMeal)`
    font-size: 3rem;
    transform: translate(-50%, -15%);
`