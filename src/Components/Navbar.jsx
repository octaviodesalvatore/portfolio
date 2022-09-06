import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

import "../Styles/Dropdown.css";

function Navbar() {
  const [t, i18n] = useTranslation("global");
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
                {t("navbar.home")}
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
                {t("navbar.about")}
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
                {t("navbar.projects")}
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
                {t("navbar.contact")}
              </Link>
            </ContactMeA>

            <div class="dropdown">
              <button class="dropbtn">
                <svg
                  style={{ width: "24px", height: "24px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </button>
              {/* {console.log(i18n.language)} */}
              <div class="dropdown-content">
                <a href="#" onClick={() => i18n.changeLanguage("en")}>
                  English
                </a>
                <a href="#" onClick={() => i18n.changeLanguage("es")}>
                  Spanish
                </a>
              </div>
            </div>
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

    .dropbtn {
      ${({ offset }) =>
        offset > 10 &&
        `
    transition: background-color 250ms ease-in;
    fill: white;
  `}
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 33px;
  padding-right: 33px;
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
