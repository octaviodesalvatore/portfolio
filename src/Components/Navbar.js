import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <p>octavio.</p>
        </Logo>
        <Nav>
          <a href="#home-top" class="underlineRed">
            Home
          </a>
          <a href="#about-me-section" class="underlineRed">
            About me
          </a>
          <a href="##my-work" class="underlineRed">
            Projects
          </a>
          <a href="#contact-me-section" class="contact-me">
            Contact Me
          </a>
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
