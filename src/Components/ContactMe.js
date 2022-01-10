import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

function ContactMe() {
  const [toasty, setToasty] = useState();
  const successMessage = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorMessage = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("gmailMessage", templateID, e.target, userID).then(
      (result) => {
        successMessage("Mensaje Enviado");
      },
      (error) => {
        errorMessage("Error al enviar el mensaje");
      }
    );
    e.target.reset();
  };

  return (
    <Wrapper id="ContactMe">
      <ToastContainer />
      <CenterContainer>
        <CvContainer>
          <a href="./docs/Octavio-De-Salvatore-CV.pdf" download="">
            <button>Descargar CV</button>
          </a>
        </CvContainer>
        <Content>
          <h2>Contáctame</h2>
          <ContactForm>
            <form onSubmit={sendEmail}>
              <h3>Enviar un mensaje</h3>
              <InputBox>
                <input type="text" name="name" />
                <span>Nombre completo</span>
              </InputBox>
              <InputBox>
                <input type="email" name="email" />
                <span>Email</span>
              </InputBox>
              <InputBox>
                <input type="text" name="subject" />
                <span>Asunto</span>
              </InputBox>
              <InputBox>
                <textarea name="message" />
                <span>Escribe tu mensaje...</span>
              </InputBox>
              <Submit>
                <input type="submit" value="Enviar" />
              </Submit>
            </form>
          </ContactForm>
        </Content>
      </CenterContainer>
    </Wrapper>
  );
}

export default ContactMe;

const Wrapper = styled.div`
  padding: 120px 0;
`;

const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const CvContainer = styled.div`
  button {
    background-color: #951717;
    border: none;
    color: #fff;
    padding: 24px 52px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    cursor: pointer;
    box-shadow: 2px 4px 8px rgb(72 69 69 / 85%);
  }
  button:hover {
    background-color: #b61313;
    transition: ease-in-out 150ms all;
  }
`;
const Content = styled.div`
  h2 {
    display: inline-block;
    font-size: 54px;
    font-weight: 600;
    text-align: left;
    position: relative;
  }

  h2::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0px;
    height: 3px;
    background-color: #951717;
    transition: all 0.3s ease-in-out;
  }
  h2:hover::after {
    width: 100%;
  }
`;
const ContactForm = styled.div`
  padding: 40px 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 25px;
    color: #333;
    font-weight: 500;
    text-align: left;
  }
`;

const InputBox = styled.div`
  position: relative;
  margin-top: 10px;

  input {
    -webkit-appearance: none;
  }

  input,
  textarea {
    width: 350px;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }
  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }
  input:focus ~ span,
  input:valid ~ span,
  textarea:focus ~ span,
  textarea:valid ~ span {
    color: #951717;
    font-size: 12px;
    transform: translateY(-20px);
  }
  input[type="submit"] {
    width: 100px;
    background: #951717;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 18px;
    color: #fff;
    border-radius: 8px;
    box-shadow: 2px 4px 8px rgb(72 69 69 / 85%);
  }
  input[type="submit"]:hover {
    background-color: #b61313;
    transition: ease-in-out 150ms all;
    position: relative;
  }
`;

const Submit = styled(InputBox)`
  input {
    @media (max-width: 768px) {
      width: 100% !important;
    }
  }
`;
