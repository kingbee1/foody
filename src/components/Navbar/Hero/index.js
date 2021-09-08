import React, {useState} from 'react';
import Sidebar from '../../Sidebar';
import Navbar from '../Navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
       <HeroContainer>
           <Navbar toggle={toggle}/> 
            <Sidebar isOpen={!isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Man must chow yunna</HeroH1>
                   <HeroP>Will get to you in 45 mins.</HeroP>
                   <HeroBtn
                   >Order Now</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero;