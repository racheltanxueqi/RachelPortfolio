import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import './styles.css'
import RachelLogo from '../../assets/RachelLogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
            <Link to="/">
               <img className="logo" src={RachelLogo} alt="Rachel's logo" />
            </Link>
        </NavBtn>
        <Bars />
        <NavMenu className="nav-menu">
          <NavLink to='/'>
            HOME
          </NavLink>
          <NavLink to='/about'>
            ABOUT ME
          </NavLink>
          <NavLink to='/timeline' >
            TIMELINE
          </NavLink>
          <NavLink to='/skills' >
            SKILLS
          </NavLink>
          <NavLink to='/projects' >
            PROJECTS
          </NavLink>
          <NavLink to='/testimonals'>
            AWARDS & TESTIMONALS
          </NavLink>
          <NavLink to='/contact'>
            CONTACT
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/resume'>DOWNLOAD RESUME</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;