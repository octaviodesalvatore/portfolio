import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Navbar() {
  const [offset, setOffset] = useState(0);

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
          <UnderlineRedA offset={offset} href="#home-top">
            Home
          </UnderlineRedA>
          <UnderlineRedA offset={offset} href="#about-me-section">
            About me
          </UnderlineRedA>
          <UnderlineRedA offset={offset} href="##my-work">
            Projects
          </UnderlineRedA>
          <ContactMeA offset={offset} href="#contact-me-section">
            Contact Me
          </ContactMeA>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
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
  }
`;

const Nav = styled.nav`
  a {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const ContactMeA = styled.a`
  border: 2px solid #951717;
  padding: 8px 18px;
  border-radius: 20px;
  transition: all 250ms ease-in-out;

  ${({ offset }) =>
    offset > 10 &&
    `
    color: white;
  `}

  &:hover {
    background-color: #951717;
    color: #fff;
  }
`;

const UnderlineRedA = styled.a`
  position: relative;
  background-color: transparent;
  border-radius: 20px;
  transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
  ${({ offset }) =>
    offset > 10 &&
    `
    color: white;
  `}

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
