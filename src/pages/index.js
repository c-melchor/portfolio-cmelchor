import React from "react";

import Layout from "../components/Layout";
import PageFooter from "../components/PageFooter";
import SideBar from "../components/SideBar";

import SecretRecipes from "../assets/images/secretrecipes.png";
import AfricanMarketplace from "../assets/images/africanmarketplace.png";

import Scroll from "../components/Scroll";

const sections = [
  { id: "top", name: "Intro", icon: "fa-home" },
  { id: "about", name: "About Me", icon: "fa-user" },
  { id: "portfolio", name: "Portfolio", icon: "fa-th" },
  { id: "contact", name: "Contact", icon: "fa-envelope" },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Christina</strong>
              <br />
              I'm a web developer
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
            2020 was a life changing year for many people, myself included. I was furloughed from my job when the COVID-19 pandemic began and I knew it was the perfect time to make a career change. I had always loved the idea of creating beautiful user friendly websites and applications but never had the confidence to begin learning. "I'm not smart enough, what if I fail?" was a thought that frequented my mind; however, I pushed the thought aside and enrolled in Lambda School's Full Stack Web Development course.

  I am truly amazed at the amount of things I have learned since I have started the course, and am happy to have developed this love for all things coding.

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
                <a href="https://github.com/BW-TT32-Secret-Family-Recipes/back-end" className="image fit" target="_blank" rel="noopener noreferrer">
                  <img src={SecretRecipes} alt="Home page of a project titled 'Secret Family Recipes'" />
                </a>
                <header>
                  <h3>Secret Family Recipes</h3>
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
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Project Here</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Are you looking for a JavaScript developer with experience in React, Redux, and Node? <br />Drop me a message, I would love to chat! I look forward to hearing from you.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
