import React from "react";

// style sheet links-------------------

import "../pages/portfolio.css";
import "../pages/about.css";
import "./service.css";
import "./project.css";
import "./skill.css";
import "./contact.css";

// home page image-------------------------

import img from "../images/mypic.png";

// about page images-------------------------

import img1 from "../images/img1.jpg";

// home page icons-----------------------------

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import resume from "../images/Praveen resume Mern stack .pdf";

// project images ----------------

import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";

// skill icons ------------------
import { PiFileHtmlFill } from "react-icons/pi";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

// contact icon-------------------

import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <>
      {/* navbar start------------------------- */}

      <section className="banner">
        <header>
          <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
              <a href="#" className="logo">
                Port <span>folio</span>
              </a>
              <button
                id="toggle-btn1"
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <i id="toggle-btn" class="bi bi-list  btn-outline-primary"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-capitalize">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about-us">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">
                      service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#project">
                      project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skill">
                      skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <img src={img} alt="my img" className="mypic" />
        <div className="content">
          <div className="contentbx">
            <h4>Hello,</h4>
            <h2>
              {" "}
              I'm <span>Praveenkumar S</span>
            </h2>
            <h3>MERN STACK DEVELOPER</h3>
            <a href="#">Hire Me</a>
            <a href={resume} download={resume}>
              Download CV
            </a>
          </div>
        </div>
        <ul className="sci">
          <li>
            {" "}
            <a href="https://www.facebook.com/login.php/" target="blank">
              <FaFacebookF id="fb" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://web.whatsapp.com/" target="blank">
              <FaWhatsapp id="whts" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram id="insta" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://x.com/i/flow/login?lang=en" target="blank">
              <FaTwitter id="twt" />
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/in/praveen-kumar-8b455b349/                 "
              target="blank"
            >
              <FaLinkedinIn id="lin" />
            </a>
          </li>
        </ul>
        <ul className="menu text-uppercase">
          <li>
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about_us">
              about
            </a>
          </li>
          <li>
            <a className="nav-link" href="#resume">
              resume
            </a>
          </li>
          <li>
            <a className="nav-link" href="#project">
              project
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </section>
      {/* navbar end------------------------- */}

      {/* about start------------------------- */}
      <section
        id="about-us"
        className="about-us row row-cols-1 row-cols-md-2 py-5 g-3"
      >
        <div className="about-img cols mx-auto">
          <img src={img1} alt="" />
        </div>

        <div className="aboutcont1 cols">
          <div className="bubble-box">
            <div className="bubble"></div>
            <div className="bubble1"></div>
          </div>

          <h2>About</h2>
          <h4>praveensomu567@gmail.com</h4>
          <p>
            MERN Stack Developer with 3 Month of experience designing and
            developing scalable, high-performance web applications. Proficient
            in MongoDB, Express.js, React.js, and Node.js, with a strong
            understanding of front-end and back-end development. Passionate
            about building user-friendly interfaces, optimizing performance, and
            ensuring robust security standards.{" "}
          </p>
        </div>
      </section>
      {/* about end------------------------- */}

      {/* service start------------------------- */}
      <section id="service">
        <div className="service-head text-center p-5">
          <h3>
            What can i do <span className="span1">?</span>
          </h3>
          <h1>My Service</h1>
        </div>
        <div className="service-body row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5 g-3">
          <div className="service-box cols position-relative ">
            <div className="service-box1">
              <i class="bi bi-phone"></i>
              <h3>Web Design</h3>
              <p>
                We are dedicated to providing high-quality web design services
                that are tailored to meet the specific needs of our clients.
              </p>
              <div id="demo" class="collapse">
                well-designed website should be visually appealing, easy to
                navigate, and user-friendly. Good UI/UX ensures visitors stay
                longer and interact with the content.
              </div>
              <button
                type="button"
                class="btn btn-outline-primary stretched-link"
                data-toggle="collapse"
                data-target="#demo"
              >
                Read More..
              </button>
            </div>
          </div>
          <div className="service-box cols position-relative">
            <div className="service-box1">
              <i class="bi bi-code-slash"></i>
              <h3>Web Development</h3>
              <p>
                We use the latest web technologies and development tools to
                create websites that are fast, secure, and scalable.
              </p>
              <div id="demo1" class="collapse">
                Full-Stack Development – Web development includes both frontend
                (user interface) and backend (server, database). A full-stack
                developer handles everything, using technologies like React
                (frontend), Node.js (backend), and MongoDB (database) to build
                complete web applications.
              </div>
              <button
                type="button"
                class="btn btn-outline-primary stretched-link"
                data-toggle="collapse"
                data-target="#demo1"
              >
                Read More..
              </button>
            </div>
          </div>
          <div className="service-box cols position-relative">
            <div className="service-box1">
              <i class="bi bi-vector-pen"></i>
              <h3>Creative Design</h3>
              <p>
                Our approach is collaborative, and we encourage your feedback
                throughout the design process to ensure that we are meeting your
                expectations.
              </p>
              <div id="demo2" class="collapse">
                In the center, a merge effect symbolizes Full Stack Development,
                blending both worlds into a seamless application.
              </div>
              <button
                type="button"
                class="btn btn-outline-primary stretched-link"
                data-toggle="collapse"
                data-target="#demo2"
              >
                Read More..
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* service end------------------------- */}

      {/* project start------------------------- */}
      <section id="project">
        <div className="project-head text-center p-5">
          <h3>Portfolio</h3>
          <h1>
            <span className="span1">Latest</span> Project
          </h1>
        </div>
        <div className="project-box">
          <div className="row row-cols-1 row-cols-lg-2 py-5 g-3 project-border position-relative">
            <div className="img-box mx-auto">
              <img src={project1} alt="project screenshot" />
            </div>
            <div className="img-text">
              <a
                href="https://praveensomu.github.io/eye-shadow/"
                target="blank"
                className="stretched-link"
              >
                The Eye Shadow Photography
              </a>
              <h4>Using : React js , Bootstrap , Javascript , CSS , HTML5</h4>
              <h4>Features :</h4>
              <p>
                <span className="span2"> Dynamic Gallery -</span>Showcases
                high-quality photography with smooth transitions and filters.{" "}
              </p>
              <p>
                <span className="span2"> Responsive Design -</span>Ensures a
                seamless experience across all devices using Bootstrap and CSS.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 py-5 g-3 project-border  position-relative">
            <div className="img-box mx-auto">
              <img src={project2} alt="project screenshot" />
            </div>
            <div className="img-text">
              <a
                href="https://praveensomu.github.io/resort/"
                target="blank"
                className="stretched-link"
              >
                SUBII'S RESORT & Hotels
              </a>
              <h4>Using : React js , Bootstrap , Javascript , CSS , HTML5</h4>
              <h4>Features :</h4>
              <p>
                <span className="span2"> Luxury Booking System -</span>Seamless
                room reservations with an interactive UI.
              </p>
              <p>
                <span className="span2">Responsive & Aesthetic Design -</span>
                Stunning visuals with Bootstrap and CSS for all devices.{" "}
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 py-5 g-3 project-border  position-relative">
            <div className="img-box mx-auto">
              <img src={project3} alt="project screenshot" />
            </div>
            <div className="img-text">
              <a
                href="https://PraveenSomu.github.io/red-wine/"
                className="stretched-link"
                target="blank"
              >
                {" "}
                Red Wine café
              </a>
              <h4>Using : React js , Bootstrap , Javascript , CSS , HTML5</h4>
              <h4>Features :</h4>
              <p>
                <span className="span2"> Interactive Menu Display -</span>
                Showcases food & drinks with dynamic filters and categories.{" "}
              </p>
              <p>
                <span className="span2"> Responsive Design -</span>Allows
                customers to book tables effortlessly with a responsive UI.4o
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 py-5 g-3 project-border  position-relative">
            <div className="img-box mx-auto">
              <img src={project4} alt="project screenshot" />
            </div>
            <div className="img-text">
              <a
                href="https://praveensomu.github.io/the-adventure-map/"
                target="blank"
                className="stretched-link"
              >
                The Map Adventure
              </a>
              <h4>
                Using : React js , Bootstrap , Javascript , CSS , HTML5 , Node
                js , Express js , Mongo DB.{" "}
              </h4>
              <h4>Features :</h4>
              <p>
                <span className="span2">
                  {" "}
                  Interactive Map-Based Destination Search -
                </span>
                Users can explore and filter travel destinations using an
                interactive map.
              </p>
              <p>
                <span className="span2">User-Friendly Booking System -</span>
                Book travel experiences with real-time availability updates and
                itinerary management, all without payment integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* project end------------------------- */}

      {/* skill start------------------------- */}
      <section id="skill">
        <div className="skill-head text-center ">
          <h1>
            <span className="span1">M</span>y Skills..
            <span className="span1">!</span>
          </h1>
        </div>
        <div className="skill-body row row-cols-2 row-cols-md-3 row-cols-lg-4 py-5 g-3">
          <div className="skill-box cols">
            <div className="skill-box1">
              <PiFileHtmlFill id="skill-icons" />
              <h4>html</h4>
              <p>Writing clean, semantic, and accessible code.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <FaCss3Alt id="skill-icons" />
              <h4>css</h4>
              <p>Styling with modern techniques, including Flexbox & Grid.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <IoLogoJavascript id="skill-icons" />
              <h4>java script</h4>
              <p>Building dynamic and interactive web experiences.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <FaBootstrap id="skill-icons" />
              <h4>bootstrap</h4>
              <p>Creating responsive and mobile-friendly designs.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <FaReact id="skill-icons" />
              <h4>react js</h4>
              <p>Developing efficient and scalable UI components</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <SiExpress id="skill-icons" />
              <h4>express js</h4>
              <p>Building robust and secure backend APIs.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <FaNodeJs id="skill-icons" />
              <h4>node js</h4>
              <p>Managing server-side logic and performance.</p>
            </div>
          </div>
          <div className="skill-box cols">
            <div className="skill-box1">
              <SiMongodb id="skill-icons" />
              <h4>mongo db</h4>
              <p>Handling NoSQL databases for scalable applications.</p>
            </div>
          </div>
        </div>
      </section>
      {/* skill end------------------------- */}

      {/* contact start------------------------- */}
      <section id="contact">
        <div className="contact-head">
          <h4>
            <span className="span1">H</span>ow to..
          </h4>
          <h1>
            Contact Me<span className="span1">!</span>
          </h1>
        </div>
        <div id="contact_media" className="row">
          <div className=" col-lg-12 contact_box2 mx-auto ">
            <div className="contact_main d-flex row row-col-3">
              <div className="contact_box3 cols text-uppercase mx-auto text-center">
                <FaPhone id="contact_icon" /> <br />
                <h4>phone</h4>
                <h6>+91 9345751657</h6>
              </div>
              <div className="contact_box3 cols text-uppercase mx-auto text-center ">
                <MdEmail id="contact_icon" /> <br />
                <h4>email</h4>
                <h6 className="text-lowercase">praveensomu567 @gmail.com</h6>
              </div>
              <div className="contact_box3 cols text-uppercase mx-auto text-center ">
                <FaLocationDot id="contact_icon" /> <br />
                <h4>address</h4>
                <h6>punjai puliampatti, erode - 638459.</h6>
              </div>
            </div>

            <div className="myname">
              <h6>
                Desinged & Developed By Praveenn Copyright &copy; &#8482;{" "}
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* contact end------------------------- */}
    </>
  );
};

export default Home;
