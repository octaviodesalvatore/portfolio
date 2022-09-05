import React from "react";
import styled from "styled-components";
import WorkElement from "./WorkElement";
import Fade from "react-reveal/Fade";

function MyWork() {
  return (
    <WorkSection id="Projects">
      <Fade right>
        <Title>
          <h2>Mis trabajos</h2>
        </Title>
        <WorkContainer>
          <WorkElement
            description={
              "Creada con ReactJS para el proyecto final de Coderhouse"
            }
            link={"https://skinhub.vercel.app/"}
            img={"img/work9.png"}
            GithubLink={"https://github.com/octaviodesalvatore/e-commerce"}
          />

          <WorkElement
            description={"Creada con NextJS con PokéAPI (sigue en desarollo)"}
            link={"https://pokemon-octavio.vercel.app/"}
            img={"img/work10.png"}
            GithubLink={"https://github.com/octaviodesalvatore/pokemon-static"}
          />

          <WorkElement
            description={"Clone de Tesla - ReactJS"}
            link={"https://tesla-clone-octavio.vercel.app/"}
            img={"img/work11.png"}
            GithubLink={"https://github.com/octaviodesalvatore/tesla-clone"}
          />

          <WorkElement
            description={
              "Clone de Twitter - NextJS Sanity (en desarollo pero funciona los tweets)"
            }
            link={"https://twitter-clone-omega-bice.vercel.app/"}
            img={"img/work12.png"}
            GithubLink={"https://github.com/octaviodesalvatore/twitter-clone"}
          />

          <WorkElement
            description={
              "Landing Page Realizada para curso de Le Wagon Argentina"
            }
            link={"https://travel-guide-octavio.netlify.app/"}
            img={"img/work1.PNG"}
            GithubLink={"https://github.com/octaviodesalvatore/travel-guide"}
          />

          <WorkElement
            description={
              "Maquetación de la pagina de Spotify para practica personal"
            }
            link={"https://octavio-spotify-practica-maquetado.netlify.app/"}
            img={"img/work2.PNG"}
            GithubLink={
              "https://github.com/octaviodesalvatore/spotify-maquetado"
            }
          />

          <WorkElement
            description={
              "Landing Page realizada para trabajo de la universidad"
            }
            link={"https://octavio-cuponcito.netlify.app/"}
            img={"img/work3.PNG"}
            GithubLink={"https://github.com/octaviodesalvatore/Cuponcito"}
          />

          <WorkElement
            description={
              "Infografía interactiva realiazada para la universidad. Una de mis primeras paginas sin mucho conocimiento de css"
            }
            link={"https://energias-renovables.netlify.app/"}
            img={"img/work4.PNG"}
            GithubLink={
              "https://github.com/octaviodesalvatore/Energias-Renovables"
            }
          />

          <WorkElement
            description={"Contador de dias para nuevo año"}
            link={"https://new-years-counter.netlify.app/"}
            img={"img/work5.PNG"}
            GithubLink={
              "https://github.com/octaviodesalvatore/new-years-counter"
            }
          />

          <WorkElement
            description={"Juego de preguntas simple"}
            link={"https://octavio-first-quiz-app.netlify.app/"}
            img={"img/work6.PNG"}
            GithubLink={"https://github.com/octaviodesalvatore/first-quiz-app"}
          />

          <WorkElement
            description={"Juego realizado con p5.JS para la universidad"}
            link={"https://cementery-scape.netlify.app/"}
            img={"img/work7.PNG"}
            GithubLink={"https://github.com/octaviodesalvatore/cementery-scape"}
          />

          <WorkElement
            description={"Practica de JS"}
            link={"https://tweet-do.netlify.app/"}
            img={"img/work8.PNG"}
            GithubLink={"https://github.com/octaviodesalvatore/tweet-do"}
          />
        </WorkContainer>
      </Fade>
    </WorkSection>
  );
}

export default MyWork;

const WorkSection = styled.div`
  padding: 120px 0;
  background-color: #951717;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3021%26quot%3b)' fill='none'%3e%3crect width='2560' height='1440' x='0' y='0' fill='rgba(149%2c 23%2c 23%2c 1)'%3e%3c/rect%3e%3cpath d='M2560 0L1896.05 0L2560 130.56z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M1896.05 0L2560 130.56L2560 309.83000000000004L1734.3899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1734.3899999999999 0L2560 309.83000000000004L2560 391.00000000000006L1058.79 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1058.79 0L2560 391.00000000000006L2560 861.4100000000001L1009.92 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1440L1125.54 1440L0 1308.01z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1308.01L1125.54 1440L1423.56 1440L0 789.62z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 789.62L1423.56 1440L1987.8899999999999 1440L0 309.2z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 309.20000000000005L1987.8899999999999 1440L2156.58 1440L0 210.78000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3021'%3e%3crect width='2560' height='1440' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh; */
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    text-align: center;
    color: #fff;
    margin-bottom: 3rem;
    font-size: 32px;
    position: relative;
    display: inline-block;
  }
  h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background-color: #fffefe;
  }
  h2:hover::after {
    width: 100%;
    transition: ease-in-out 300ms width;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: ease-in-out 300ms width;
  max-width: 1200px;
  margin: 0 auto;
`;
