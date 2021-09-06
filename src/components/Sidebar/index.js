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
                <SidebarLink to="/">Lunch</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Combo</SidebarLink>
             </SidebarMenu>
             <SideBtnWrap>
                 <SidebarRoute to="/">Order Now</SidebarRoute>
             </SideBtnWrap>
         </SidebarContainer>
     )
 }

export default Sidebar