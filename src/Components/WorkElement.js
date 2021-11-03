import React from "react";
import "../Styles/StylesWorkElement.css";

function WorkElement({ description, img, link, GithubLink }) {
  return (
    <div className="work">
      <img src={img} alt="Trabajo img" />
      <figcaption className="hover-absolute-card">
        <h3>{description}</h3>
        <div className="SpanElementContainer">
          <a href={link} target="”_blank”">
            <span>Visiatar sitio web</span>
          </a>
          <span>
            <a href={GithubLink} target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </span>
        </div>
      </figcaption>
    </div>
  );
}

export default WorkElement;
