import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute} from './SidebarElement';

 const Sidebar = ({isOpen, toggle}) => {
     return(
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <Icon>
                 <CloseIcon/>
             </Icon>
             <SidebarMenu>
                <SidebarLink to="/">Breakfast</SidebarLink>
                <SidebarLink to="/">african dishes</SidebarLink>
                <SidebarLink to="/">intercontinental</SidebarLink>
                <SidebarLink to="/">drinks</SidebarLink>
             </SidebarMenu>
             <SideBtnWrap>
                 <SidebarRoute to="/">Order Now</SidebarRoute>
             </SideBtnWrap>
         </SidebarContainer>
     )
 }

export default Sidebar