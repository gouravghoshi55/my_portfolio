import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from '../assets/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  exit: { x: -100, opacity: 0, transition: { duration: 2 } },
};

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  exit: { x: 100, opacity: 0, transition: { duration: 2 } },
};

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Animated Text Section */}
            <Col md={7} className="home-header">
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Gourav Ghoshi </strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </motion.div>
            </Col>

            {/* Animated Image Section */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
