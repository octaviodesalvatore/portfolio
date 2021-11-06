import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/octaviodesalvatore/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/okidesalvatore" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="https://github.com/octaviodesalvatore" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a href="https://www.twitch.tv/okitek1" target="_blank">
              <i className="fab fa-twitch"></i>
            </a>
          </li>
        </ul>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 28px 0;
  background-color: #951717;
  background-color: #951717;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3021%26quot%3b)' fill='none'%3e%3crect width='2560' height='1440' x='0' y='0' fill='rgba(149%2c 23%2c 23%2c 1)'%3e%3c/rect%3e%3cpath d='M2560 0L1896.05 0L2560 130.56z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1896.05 0L2560 130.56L2560 309.83000000000004L1734.3899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1734.3899999999999 0L2560 309.83000000000004L2560 391.00000000000006L1058.79 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1058.79 0L2560 391.00000000000006L2560 861.4100000000001L1009.92 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1440L1125.54 1440L0 1308.01z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1308.01L1125.54 1440L1423.56 1440L0 789.62z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 789.62L1423.56 1440L1987.8899999999999 1440L0 309.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 309.20000000000005L1987.8899999999999 1440L2156.58 1440L0 210.78000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3021'%3e%3crect width='2560' height='1440' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh; */
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
  }

  a i {
    color: #fff;
    margin: 0 20px;
    font-size: 30px;
    padding: 12px;
    border-radius: 50%;
  }

  a i:hover {
    color: rgb(255, 255, 255);
    transition: 100ms color linear;
    background-color: rgb(97, 19, 19);
  }
  @media (max-width: 540px) {
    a i {
      color: #fff;
      margin: 0 7px;
      font-size: 26px;
      padding: 12px;
      border-radius: 50%;
    }
  }
`;
