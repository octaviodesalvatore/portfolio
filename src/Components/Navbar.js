import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function Navbar() {
  const [offset, setOffset] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  return (
    <Container offset={offset}>
      <Wrapper>
        <Logo>
          <p>octavio.</p>
        </Logo>
        <Nav>
          <ul>
            <UnderlineRedA offset={offset}>
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Home
              </Link>
            </UnderlineRedA>
            <UnderlineRedA offset={offset}>
              <Link
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Sobre mí
              </Link>
            </UnderlineRedA>
            <UnderlineRedA offset={offset}>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Proyectos
              </Link>
            </UnderlineRedA>
            <ContactMeA offset={offset}>
              <Link
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Contáctame
              </Link>
            </ContactMeA>
          </ul>
        </Nav>
        <Hamburger open={open} onClick={() => setOpen(true)}>
          <div></div>
        </Hamburger>

        <NavMobile show={open}>
          <CloseHamburger open={open} onClick={() => setOpen(false)}>
            x
          </CloseHamburger>
          <ul>
            <MobileLinks offset={offset}>
              <Link
                onClick={() => setOpen(false)}
                to="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Home
              </Link>
            </MobileLinks>
            <MobileLinks offset={offset}>
              <Link
                onClick={() => setOpen(false)}
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Sobre mí
              </Link>
            </MobileLinks>
            <MobileLinks offset={offset}>
              <Link
                onClick={() => setOpen(false)}
                to="Projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Proyectos
              </Link>
            </MobileLinks>
            <MobileLinks offset={offset}>
              <Link
                onClick={() => setOpen(false)}
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={50}
                duration={50}
              >
                Contáctame
              </Link>
            </MobileLinks>
          </ul>
        </NavMobile>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const CloseHamburger = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  cursor: pointer;
  color: white;
`;

const MobileLinks = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: 600;

  a {
    color: white;
    cursor: pointer;
  }
`;

const Hamburger = styled.span`
  display: block;
  width: 35px;
  cursor: pointer;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  z-index: 99;
  right: 36px;
  position: fixed;

  &:after,
  &::before,
  div {
    content: "";
    display: block;
    width: 100%;
    height: 5px;
    background-color: #000;

    margin: 6px 0px;
    transition: 0.4s;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #951717;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    position: fixed;
    z-index: 90;
    transition: all 150ms cubic-bezier(0.77, 0, 0.175, 1);
    ${({ offset }) =>
      offset > 10 &&
      `
    backdrop-filter: saturate(180%) blur(10px);
    background-color: #020000bd;
    transition: background-color 250ms ease-in;
    color: white;
  `}
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  font-size: 18px;
`;

const Logo = styled.div`
  p {
    font-weight: 700;
    font-family: "Caveat", cursive;
    font-size: 32px;
    user-select: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  a {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const ContactMeA = styled.li`
  border: 2px solid #951717;
  padding: 8px 18px;
  border-radius: 20px;
  transition: all 250ms ease-in-out;

  a {
    cursor: pointer;
    font-weight: 500;
    ${({ offset }) =>
      offset > 10 &&
      `
    color: white;
  `}
  }

  &:hover {
    background-color: #951717;
    color: #fff;
  }
`;

const UnderlineRedA = styled.li`
  position: relative;
  background-color: transparent;
  border-radius: 20px;
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);

  a {
    font-weight: 500;
    cursor: pointer;
    ${({ offset }) =>
      offset > 10 &&
      `
    color: white;
    
  `};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0px;
    height: 3px;
    background-color: #951717;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
