import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 260px;
    height: 100%;
    background: #fdd935;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;    
    right: ${({ isOpen }) =>(isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes) `
    color: black;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.9rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 60px);
    text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px); 
}
`
export const SidebarLink = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans',sans-serif;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 550;
    text-decoration: none;
    list-style: none; 
    transition: 0.2s ease-in-out;
    color: black;
    cursor: pointer;

&:hover {
    color: white;
    background
    transition: 0.2s ease-in-out;
}
`;

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(Link) `
    background: black;
    white-space: nowrap;
    padding: 16px 64px;
    color: white;
    font-family: 'Open Sans',sans-serif;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 800;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        color: yellow;
    }
`;




