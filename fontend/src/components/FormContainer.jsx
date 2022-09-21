import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const FormContainer = ({ children, className }) => {
  return (
    <Container>
      <div className={className}>
        <Row className='justify-content-center'>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FormContainer;
