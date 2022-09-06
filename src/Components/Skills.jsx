import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#951717",
        borderRadius: "10px",
        width: "35px",
        height: "35px",
        right: "25px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#951717",
        borderRadius: "10px",
        width: "35px",
        height: "35px",
        left: "25px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function Skills() {
  const [t, i18n] = useTranslation("global");
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BackgroundImage>
      <Container>
        <Fade left>
          <Wrapper>
            <h2>{t("skills.title")}</h2>
            <Slider {...settings}>
              <Element>
                <img src="./img/1280px-React-icon.svg.png" alt="React Logo" />
                <h3>React JS</h3>
              </Element>
              <Element>
                <img src="./img/Typescript_log.svg" alt="TypeScript Logo" />
                <h3>TypeScript</h3>
              </Element>
              <Element>
                <img src="./img/JavaScript.svg" alt="JavaScript Logo" />
                <h3>JavaScript</h3>
              </Element>
              <Element>
                <img
                  src="./img/styled-components.svg"
                  alt="Styled Components Logo"
                />
                <h3>Styled Components</h3>
              </Element>
              <Element>
                <img src="./img/HTML5.png" alt="HTML Logo" />
                <h3>HTML</h3>
              </Element>
              <Element>
                <img src="./img/CSS.svg" alt="CSS Logo" />
                <h3>CSS</h3>
              </Element>

              <Element>
                <img src="./img/material-ui-1.svg" alt="Material UI Logo" />
                <h3>Material UI</h3>
              </Element>

              <Element>
                <img src="./img/github-icon.svg" alt="GitHub Logo" />
                <h3>GitHub</h3>
              </Element>
              <Element>
                <img src="./img/Git_icon.png" alt="Git Logo" />
                <h3>Git</h3>
              </Element>
              <Element>
                <img
                  src="./img/Adobe_Premiere_Pro_CC_icon.svg.png"
                  alt="Premiere Logo"
                />
                <h3>Premiere</h3>
              </Element>
              <Element>
                <img
                  src="./img/Adobe_Illustrator_CC_icon.svg.png"
                  alt="Adobe_Illustrator_CC_icon Logo"
                />
                <h3>Illustrator</h3>
              </Element>
              <Element>
                <img
                  src="./img/1051px-Adobe_Photoshop_CC_icon.svg.png"
                  alt="JavaScript Logo"
                />
                <h3>Photoshop</h3>
              </Element>
            </Slider>
          </Wrapper>
        </Fade>
      </Container>
    </BackgroundImage>
  );
}

export default Skills;

const BackgroundImage = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2560' height='1440' preserveAspectRatio='none' viewBox='0 0 2560 1440'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1072%26quot%3b)' fill='none'%3e%3crect width='2560' height='1440' x='0' y='0' fill='rgba(239%2c 237%2c 237%2c 1)'%3e%3c/rect%3e%3cpath d='M319.564%2c648.928C448.94%2c646.679%2c584.9%2c621.958%2c655.479%2c513.505C731.915%2c396.051%2c738.147%2c239.558%2c662.91%2c121.333C592.097%2c10.06%2c451.113%2c-23.89%2c319.564%2c-14.34C204.937%2c-6.019%2c116.279%2c69.731%2c52.916%2c165.615C-20.168%2c276.21%2c-101.243%2c409.479%2c-37.207%2c525.547C27.944%2c643.636%2c184.715%2c651.272%2c319.564%2c648.928' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M291.518%2c636.336C411.949%2c636.981%2c515.735%2c560.034%2c576.272%2c455.921C637.166%2c351.194%2c654.006%2c222.119%2c593.333%2c117.264C532.749%2c12.563%2c412.316%2c-42.556%2c291.518%2c-36.192C180.681%2c-30.353%2c95.251%2c50.043%2c40.178%2c146.407C-14.385%2c241.877%2c-38.198%2c355.063%2c11.994%2c452.901C66.516%2c559.18%2c172.072%2c635.697%2c291.518%2c636.336' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M45.77%2c187.04C95.832%2c191.659%2c142.223%2c159.509%2c167.159%2c115.854C191.897%2c72.546%2c194.998%2c16.956%2c166.172%2c-23.745C140.458%2c-60.053%2c90.194%2c-57.979%2c45.77%2c-55.545C6.971%2c-53.419%2c-34.31%2c-45.332%2c-53.76%2c-11.694C-73.227%2c21.973%2c-59.585%2c61.769%2c-42.17%2c96.542C-21.982%2c136.852%2c0.878%2c182.898%2c45.77%2c187.04' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M2381.853%2c293.676C2448.878%2c297.743%2c2513.815%2c263.573%2c2547.975%2c205.764C2582.709%2c146.984%2c2581.064%2c73.676%2c2546.726%2c14.664C2512.59%2c-44%2c2449.567%2c-84.363%2c2381.853%2c-79.725C2320.114%2c-75.496%2c2279.774%2c-20.423%2c2251.95%2c34.853C2227.415%2c83.594%2c2222.852%2c138.75%2c2247.33%2c187.52C2274.793%2c242.238%2c2320.742%2c289.968%2c2381.853%2c293.676' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M2607.765%2c703.328C2748.38%2c704.173%2c2892.491%2c662.404%2c2967.405%2c543.403C3046.874%2c417.166%2c3045.548%2c255.255%2c2971.272%2c125.895C2896.693%2c-3.993%2c2757.492%2c-86.78%2c2607.765%2c-82.949C2464.001%2c-79.271%2c2345.969%2c18.564%2c2275.111%2c143.707C2205.42%2c266.789%2c2183.262%2c417.542%2c2255.535%2c539.126C2326.479%2c658.474%2c2468.926%2c702.494%2c2607.765%2c703.328' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2558.379%2c664.404C2684.537%2c658.995%2c2782.734%2c561.303%2c2837.437%2c447.493C2885.037%2c348.462%2c2867.744%2c234.58%2c2809.869%2c141.181C2755.331%2c53.168%2c2661.774%2c2.641%2c2558.379%2c-2.85C2442.992%2c-8.978%2c2320.916%2c16.216%2c2255.938%2c111.765C2183.169%2c218.771%2c2172.424%2c359.824%2c2234.548%2c473.342C2299.036%2c591.179%2c2424.173%2c670.158%2c2558.379%2c664.404' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M45.57%2c1317.517C91.86%2c1320.996%2c140.322%2c1305.836%2c165.104%2c1266.583C191.388%2c1224.951%2c190.329%2c1170.83%2c164.731%2c1128.772C140.067%2c1088.249%2c93.008%2c1069.948%2c45.57%2c1070.187C-1.4%2c1070.424%2c-50.201%2c1088.113%2c-71.53%2c1129.962C-91.534%2c1169.21%2c-69.755%2c1213.316%2c-46.425%2c1250.683C-24.91%2c1285.143%2c5.059%2c1314.472%2c45.57%2c1317.517' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M338.416%2c1868.2C482.744%2c1875.553%2c632.893%2c1827.26%2c708.001%2c1703.796C785.648%2c1576.158%2c777.28%2c1409.019%2c692.652%2c1285.898C616.976%2c1175.8%2c471.987%2c1163.391%2c338.416%2c1166.101C211.177%2c1168.683%2c74.94%2c1191.403%2c8.232%2c1299.784C-61.052%2c1412.351%2c-37.625%2c1554.895%2c28.768%2c1669.191C94.821%2c1782.902%2c207.082%2c1861.509%2c338.416%2c1868.2' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M247.609%2c1707.403C358.975%2c1708.364%2c467.761%2c1655.267%2c520.855%2c1557.367C571.882%2c1463.278%2c543.32%2c1352.467%2c490.628%2c1259.301C436.904%2c1164.31%2c356.598%2c1079.81%2c247.609%2c1074.236C129.732%2c1068.208%2c14.571%2c1128.795%2c-42.646%2c1232.03C-98.356%2c1332.545%2c-77.475%2c1454.636%2c-17.587%2c1552.719C39.572%2c1646.332%2c137.929%2c1706.456%2c247.609%2c1707.403' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M2440.995%2c1530.594C2526.798%2c1534.619%2c2623.566%2c1525.559%2c2668.292%2c1452.225C2714.236%2c1376.894%2c2684.983%2c1281.956%2c2638.31%2c1207.075C2594.714%2c1137.131%2c2523.314%2c1083.524%2c2440.995%2c1087.556C2363.991%2c1091.328%2c2312.209%2c1157.625%2c2274.544%2c1224.894C2238.01%2c1290.144%2c2212.094%2c1366.828%2c2247.855%2c1432.505C2284.863%2c1500.474%2c2363.689%2c1526.968%2c2440.995%2c1530.594' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M2580.759%2c1805.152C2714.707%2c1808.997%2c2859.675%2c1776.524%2c2926.856%2c1660.578C2994.166%2c1544.41%2c2952.396%2c1401.098%2c2880.619%2c1287.635C2814.387%2c1182.938%2c2704.626%2c1111.281%2c2580.759%2c1113.481C2460.397%2c1115.619%2c2360.219%2c1194.436%2c2298.801%2c1297.971C2235.897%2c1404.012%2c2207.536%2c1533.89%2c2267.444%2c1641.652C2328.793%2c1752.006%2c2454.55%2c1801.529%2c2580.759%2c1805.152' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M2507.279%2c1716.409C2617.02%2c1721.044%2c2702.28%2c1626.305%2c2749.585%2c1527.174C2790.557%2c1441.315%2c2773.969%2c1343.111%2c2724.065%2c1262.117C2676.864%2c1185.511%2c2597.088%2c1139.459%2c2507.279%2c1133.914C2405.26%2c1127.615%2c2288.462%2c1142.931%2c2238.57%2c1232.14C2189.342%2c1320.162%2c2249.073%2c1419.916%2c2298.006%2c1508.103C2349.189%2c1600.345%2c2401.882%2c1711.958%2c2507.279%2c1716.409' fill='rgba(149%2c 23%2c 23%2c 0.31)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1072'%3e%3crect width='2560' height='1440' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 100vh; */
  width: 100%;
  padding: 100px 0;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Wrapper = styled.div`
  text-align: center;

  h2 {
    display: inline-block;
    position: relative;
    font-size: 38px;
    margin-bottom: 30px;
  }

  h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0;
    background-color: #951717;
  }
  h2:hover::after {
    width: 100%;
    transition: ease-in-out 300ms width;
  }
`;

const Element = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column !important;
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  h3 {
    padding: 30px 0;
    font-size: 22px;
  }
`;
