import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moms from "../../Assets/Projects/nosh.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moms}
              isBlog={false}
              title="Nosh-Box"
              description="In this project the user can create his account and manage his account. User can add the dish from different category of food to his cart"
              ghLink="https://github.com/anii002/Nosh-Box.git"
              demoLink="https://noshbox-api.onrender.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
