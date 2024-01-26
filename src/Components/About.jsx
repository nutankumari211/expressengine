import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import expressionEngineImage from '../assets/settings3.png'; 

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="mb-4" style={{ marginTop: '40px' }}>
            <img src={expressionEngineImage} alt="Expression Engine" className="img-fluid" />
          </div>
        </Col>

        <Col lg={6}>
          <div className="mb-4" style={{ marginTop: '40px' }}>
            <h2 className="display-4 text-info">Expression Engine</h2>
            <p className="lead text-white">
              A powerful web-based tool designed for creating and managing complex rulesets with ease. Empowering users to define rules based on Age, Credit Score, and Account Balance, allowing for sophisticated decision-making in various scenarios.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="display-5 text-info">Rule Composition</h3>
            <p className="lead text-white">
              Each rule in Expression Engine comprises a rule type, operator, value, and score. Users can seamlessly combine multiple rules using logical operators (AND/OR) to construct intricate conditions tailored to their specific needs. The user-friendly form interface enables the addition, deletion, and configuration of expressions, providing a seamless experience in crafting and managing rule-based expressions. Upon defining rules, simply click "Generate Output" to visualize the final output based on the specified conditions and logical operators.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="display-5 text-info">Stylish Interface</h3>
            <p className="lead text-white">
              Expression Engine strives to deliver a stylish and intuitive interface, simplifying the process of creating and handling complex decision-making processes for users.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
