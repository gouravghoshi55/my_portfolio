import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Hotel Booking Website"
              description="A hotel booking management system simplifies reservations, cancellations, and guest management. The responsive front-end, built with React and Material-UI, ensures a seamless user experience. Users can search hotels, check availability, and book rooms instantly. The admin panel allows managing room details, pricing, and user profiles. Secure authentication and payment integration ensure safety. The backend, powered by Node.js and MongoDB, supports CRUD operations. Customers receive booking confirmations, cancellation options, and support via chat for inquiries and modifications."
              ghLink="https://github.com/gouravghoshi55/hotelbooking-website.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Train Ticket Booking"
              description="A train ticket booking system streamlines ticket reservations, cancellations, and passenger management. The user-friendly front-end, built with React and Material-UI, allows travelers to search for trains, check availability, and book seats instantly. The admin panel manages routes, pricing, and user profiles. Secure authentication and payment integration enhance safety. The backend, powered by Node.js and MongoDB, supports full CRUD functionality. Users receive booking confirmations, cancellation options, and real-time notifications for schedule updates, ensuring a seamless travel experience."
              ghLink="https://github.com/gouravghoshi55/Train-ticket-booking.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Music-Player"
              description="A music player app provides seamless audio playback with a sleek, user-friendly interface. Built with React and Material-UI, it supports playlist creation, song categorization, and real-time search. Users can play, pause, skip tracks, and adjust volume effortlessly. The admin panel manages song uploads, metadata, and user preferences. The backend, powered by Node.js and MongoDB, enables CRUD operations. With offline support, equalizer settings, and personalized recommendations, the app enhances the listening experience for music lovers."
              ghLink="https://github.com/gouravghoshi55/music-player.git"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  )
}

export default Projects