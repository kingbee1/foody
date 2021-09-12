import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import {  FooterContainer,
    FooterWrap,
    SocialMedia,
    //SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialMediaWrap} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                  <SocialMediaWrap>
                    <SocialLogo></SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="https://twitter.com/real_kingbee" target="_blank"aria-label="Twitter" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="https://www.wikihow.com/Become-a-Clown" target="_blank"aria-label="Facebook" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="https://github.com/kingbee1" target="_blank"aria-label="GitHub" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
                        <SocialIconLink href="https://instagram.com/instagram" target="_blank"aria-label="Instagram" rel="noopener noreferrer"><FaInstagram /></SocialIconLink>
                    </SocialIcons>
                   </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}


export default Footer