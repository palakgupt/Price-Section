import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricesection.css'; // Import the custom CSS file

const PricingSection = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={4}>
          <Card className="text-center pricing-card">
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Text>
                $10/month
              </Card.Text>
              <Button variant="primary" className="pricing-button">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center pricing-card">
            <Card.Body>
              <Card.Title>Standard Plan</Card.Title>
              <Card.Text>
                $35/month
              </Card.Text>
              <Button variant="primary" className="pricing-button">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center pricing-card">
            <Card.Body>
              <Card.Title>Premium Plan</Card.Title>
              <Card.Text>
                $40/month
              </Card.Text>
              <Button variant="primary" className="pricing-button">Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingSection;
