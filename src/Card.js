import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./styles.css";

export function SingleContact({ contact, setPerson }) {
  return (
    <div className="contact-container p-3">
      <Card style={{ cursor: "pointer" }} onClick={() => setPerson(contact)}>
        <Card.Header className="bg-primary text-white">
          Contact Information
        </Card.Header>
        <Card.Body>
          <Row>
            <Row className="mb-3">
              <Col md={12}>
                <strong style={{marginRight:'5px'}}>Email: </strong>
                <span>{contact["E-mail Address"]}</span>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={5}>
                <strong>Display Name:</strong>
              </Col>
              <Col md={7}>
                <span>{contact["Display Name"]}</span>
              </Col>
            </Row>
            {contact["Home State"].trim() && (
              <Row>
                <Col md={5}>
                  <strong>Home State:</strong>
                </Col>
                <Col md={7}>
                  <span>{contact["Home State"]}</span>
                </Col>
              </Row>
            )}
            {contact["Home Phone"].trim() && (
              <Row>
                <Col md={5}>
                  <strong>Home Phone:</strong>
                </Col>
                <Col md={7}>
                  <span>{contact["Home Phone"]}</span>
                </Col>
              </Row>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
