import React from "react";
import "../stylesheet/Skills.scss";
import html from "../assets/logos/html-img.png";
import css from "../assets/logos/css-img.png";
import js from "../assets/logos/js-img.png";
import vscode from "../assets/logos/vscode-img.png";
import materialui from "../assets/logos/materialui-img.png";
import vue from "../assets/logos/vue-img.png";
import react from "../assets/logos/react-img.png";
import expo from "../assets/logos/expo-img.png";
import node from "../assets/logos/node-img.png";
import npm from "../assets/logos/npm-img.png";
import sqlite from "../assets/logos/sqlite-img.png";
import mongodb from "../assets/logos/mongodb-img.png";
import git from "../assets/logos/git-img.png";
import github from "../assets/logos/github.png";
import figma from "../assets/logos/figma-img.png";
import access from "../assets/logos/access-img.png";
import responsive from "../assets/logos/responsive-img.png";
import trello from "../assets/logos/trello.png";

export const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">Skills</h1>
      <div className="skill-block" data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="logo">
          <img src={html} alt="html" />
          <p>HTML</p>
        </div>
        <div className="logo">
          <img src={css} alt="html" />
          <p>CSS</p>
        </div>
        <div className="logo">
          <img src={js} alt="html" />
          <p>JavaScript</p>
        </div>
        <div className="logo">
          <img src={vscode} alt="html" />
          <p>VS CODE</p>
        </div>
        <div className="logo">
          <img src={materialui} alt="html" />
          <p>Material IU</p>
        </div>
        <div className="logo">
          <img src={vue} alt="html" />
          <p>VUE</p>
        </div>
        <div className="logo">
          <img src={react} alt="html" />
          <p>React</p>
        </div>
        <div className="logo">
          <img src={react} alt="html" />
          <p>React Native</p>
        </div>
        <div className="logo">
          <img src={expo} alt="html" />
          <p>Expo</p>
        </div>
        <div className="logo">
          <img src={node} alt="html" />
          <p>Node</p>
        </div>
        <div className="logo">
          <img src={npm} alt="html" />
          <p>NPM</p>
        </div>
        <div className="logo">
          <img src={sqlite} alt="html" />
          <p>Sqlite</p>
        </div>
        <div className="logo">
          <img src={mongodb} alt="html" />
          <p>Mongo DB</p>
        </div>
        <div className="logo">
          <img src={git} alt="html" />
          <p>Git</p>
        </div>
        <div className="logo">
          <img src={github} alt="html" />
          <p>Github</p>
        </div>
        <div className="logo">
          <img src={figma} alt="html" />
          <p>Figma</p>
        </div>
        <div className="logo">
          <img src={access} alt="html" />
          <p>Accessibility</p>
        </div>
        <div className="logo">
          <img src={responsive} alt="html" />
          <p>Responsive Design</p>
        </div>
        <div className="logo">
          <img src={trello} alt="html"  width='70px' />
          <p>Agil Development </p>
        </div>
      </div>
    </div>
  );
};
