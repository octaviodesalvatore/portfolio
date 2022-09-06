import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

function Hero() {
  const [t, i18n] = useTranslation("global");
  return (
    <Fade left>
      <BackgroundImg>
        <Wrapper id="Home">
          <HeroBox>
            <h1>{t("hero.hello-world")}</h1>
            <p>{t("hero.subtitle")}</p>
            <img src="./img/image3.svg" alt="Avatar" />
          </HeroBox>
          <Image>
            <img src="./img/undraw_responsive_6c8s.svg" alt="" />
          </Image>
        </Wrapper>
      </BackgroundImg>
    </Fade>
  );
}

export default Hero;

const BackgroundImg = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1048%26quot%3b)' fill='none'%3e%3crect width='2560' height='1440' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M67 1440L1507 0L1643.5 0L203.5 1440z' fill='url(%23SvgjsLinearGradient1049)'%3e%3c/path%3e%3cpath d='M853.8000000000001 1440L2293.8 0L3484.8 0L2044.8000000000002 1440z' fill='url(%23SvgjsLinearGradient1049)'%3e%3c/path%3e%3cpath d='M2520 1440L1080 0L70.5 0L1510.5 1440z' fill='url(%23SvgjsLinearGradient1050)'%3e%3c/path%3e%3cpath d='M1554.1999999999998 1440L114.19999999999982 0L-418.3000000000002 0L1021.6999999999998 1440z' fill='url(%23SvgjsLinearGradient1050)'%3e%3c/path%3e%3cpath d='M1155.7766898063508 1440L2560 35.77668980635076L2560 1440z' fill='url(%23SvgjsLinearGradient1049)'%3e%3c/path%3e%3cpath d='M0 1440L1404.2233101936492 1440L 0 35.77668980635076z' fill='url(%23SvgjsLinearGradient1050)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1048'%3e%3crect width='2560' height='1440' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1049'%3e%3cstop stop-color='rgba(255%2c 182%2c 182%2c 0.63)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 182%2c 182%2c 0.63)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1050'%3e%3cstop stop-color='rgba(255%2c 182%2c 182%2c 0.63)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 182%2c 182%2c 0.63)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  padding-top: 2rem;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4.5rem 1.5rem;

  h1 {
    display: block;
    white-space: nowrap;
    border-right: 4px solid;
    width: 12ch;
    animation: typing 2s steps(12), blink 0.5s infinite step-end alternate;
    overflow: hidden;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  h1,
  p {
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }

  img {
    width: 200px;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 500px;
    overflow: hidden;
  }
`;
