import React from "react";

import Layout from "../components/Layout";
import PageFooter from "../components/PageFooter";
import SideBar from "../components/SideBar";

import SecretRecipes from "../assets/images/secretrecipes.png";
import AfricanMarketplace from "../assets/images/africanmarketplace.png";
import Jokes from "../assets/images/jokes.png";
import Rick from "../assets/images/Rick.png";
import OMDB from "../assets/images/OMDB.png";
import Scroll from "../components/Scroll";

const sections = [
  { id: "top", name: "Intro", icon: "fa-home" },
  { id: "about", name: "About Me", icon: "fa-user" },
  { id: "portfolio", name: "Portfolio", icon: "fa-th" }
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Christina</strong>,
              <p>I'm a web developer.</p>
            </h2>
            <p>I've made a few things, check them out.</p>
          </header>

          <footer>
            <Scroll type="id" element={"portfolio"}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <p>
            Hi, <span role="img" aria-label="waving hand">👋</span> I'm Christina and I'm a fitness geek turned web development nerd.<br />
            2020 turned my life upside down in the <strong>BEST</strong> way; I was furloughed from my job in the fitness industry and decided to enroll in <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School's</a> Web Devlopment program. Over the course of the last year, I've built applications utilizing React, Redux, a little bit of Node - these projects are showcased below, linked either the repo I worked on or the deployed site. It's been a whirlwind of emotions but I am eagerly seeking new opportunities in the tech industry. I can be reached on <a href="https://www.linkedin.com/in/camelchor/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, I look forward to hearing from you!
          </p>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            I've worked on multiple projects this last year utilizing React, Redux, and Node. <br />Here are a few of those projects.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://rickandmorty-ivory.vercel.app/" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={Rick} alt="Home page of a project titled 'Rick and Morty'" />
                </a>
                <header>
                  <h3>Rick and Morty</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://jokes-liart.vercel.app/" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={Jokes} alt="Home page of a project titled 'Jokes'" />
                </a>
                <header>
                  <h3>Jokes</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://omdb-nominations-4afxpp43y-c-melchor.vercel.app/" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={OMDB} alt="Home page of a project titled 'OMDB Movie App'" />
                </a>
                <header>
                  <h3>OMDB Movie App</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/BW-AfricanMarketplace-TT32/front-end" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={AfricanMarketplace} alt="Home page of a project titled 'African Marketplace'" />
                </a>
                <header>
                  <h3>African Marketplace</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://github.com/BW-TT32-Secret-Family-Recipes/back-end" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={SecretRecipes} alt="Home page of a project titled 'Secret Family Recipes'" />
                </a>
                <header>
                  <h3>Secret Family Recipes</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
