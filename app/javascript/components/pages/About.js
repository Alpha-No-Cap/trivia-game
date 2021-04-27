import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Container
} from "reactstrap";
import Nick from "/app/assets/images/nick.jpg";
import Justin from "/app/assets/images/justin.jpg";
import Stephanie from "/app/assets/images/stephanie.jpg";
import Raul from "/app/assets/images/raul.png";

const About = (props) => {
  return (
    <div>
      <Container fluid className="about-container">
        <h2 className="about-header">About Us</h2>
        <Row>
          <Col xs="6">
            <Card className="about-card">
              <CardImg top width="100%" src={Justin} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Justin Hilario</CardTitle>
                <CardText>Project Manager</CardText>
                <CardText></CardText>
              </CardBody>
            </Card>
            <Card className="about-card">
              <CardImg top width="100%" src={Stephanie} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Stephanie Begle</CardTitle>
                <CardText>Tech Lead</CardText>
                <CardText></CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="6">
            <Card className="about-card">
              <CardImg top width="100%" src={Raul} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Raul</CardTitle>
                <CardText>Product Manager</CardText>
                <CardText></CardText>
              </CardBody>
            </Card>
            <Card className="about-card">
              <CardImg top width="100%" src={Nick} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Nick Saunders</CardTitle>
                <CardText>Design Lead</CardText>
                <CardText></CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
