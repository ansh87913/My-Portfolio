import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typing from "./Typing";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Welcome!
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ansh Jain</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>

              <div className="social-links" style={{ marginTop: "50px", marginLeft:"50px"}}>
                <a
                  href="https://www.linkedin.com/in/ansh-jain-b73634255/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} style={{ margin: "0 15px", color: "white" }} />
                </a>
                <a
                  href="https://github.com/ansh87913"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} style={{ margin: "0 15px", color: "white" }} />
                </a>
                <a
                  href="https://www.instagram.com/ansh_jain555?igsh=MXNiejI2Zms4ZGZhaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} style={{ margin: "0 15px", color: "white" }} />
                </a>
                <a
                  href="https://www.facebook.com/ansh.jain.313924?mibextid=JRoKGi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} style={{ margin: "0 15px", color: "white" }} />
                </a>
              </div>
            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              <div style={{ fontSize: "x-large", marginTop: "20px" }}>
                I am a Full Stack Developer proficient in MERN stack with expertise in creating dynamic web applications.
                AWS Certified Cloud Practitioner adept at leveraging cloud technologies. Skilled in C++ for DSA
                problem-solving.
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
