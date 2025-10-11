import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
const FaBars = FaIcons.FaBars as React.ComponentType;
const FaTimes = FaIcons.FaTimes as React.ComponentType;

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 70px);
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s ease-in-out;
    padding: 2rem 0;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1.1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">All The <span>Classes</span></Logo>
        
        <MenuIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/classes" onClick={() => setIsOpen(false)}>Classes</NavLink>
          </NavItem>
          <NavItem>
           <NavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
