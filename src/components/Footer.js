import { Container, Row, Col } from "react-bootstrap";
import githubIcon from '../assets/navImg/github.png'
import linkedinIcon from '../assets/navImg/linkedIn.png'
import cvIcon from '../assets/navImg/cv.png'
import resume from '../assets/Hammad Faiz Resume.pdf'

export const Footer = () => {
  const name = "< Hammad Faiz />"
  return (
      <footer className="footer">
        <Container >
          <Row className="align-items-center">
            <Col size={12} sm={6} className="text-start text-sm-end">
              <h6 className="name">{name}</h6>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/faiz-hammad/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn"/></a>
                <a href="https://github.com/Hammad-Faiz" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Github" /></a>
                <a href={resume} target="_blank" rel="noreferrer"><img src={cvIcon} alt="Resume" /></a>
                <p>&copy; Copyright 2023. All Rights Reserved</p>
              </div> 
            </Col>
          </Row>
        </Container>
      </footer>
   
  )
} 

