
import React, { useState } from "react";
import styled from "styled-components";
import Login from './Login'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('none')
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor('rgba(0,0,0,0.6)')
    }
    else {
      setColor('none')
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <Nav style={{background:`${color}`}} >
      <Logo href="">
        Eli<span>Codes</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Trang chủ</MenuLink>
        <MenuLink href="">Công việc</MenuLink>
        <MenuLink href="">Về chúng tôi</MenuLink>
        <Login />
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease-in;
  font-size: 24px;
  &:hover {
    color: #50feb8;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  

`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 2.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
  &:hover {
    color: #50feb8;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
