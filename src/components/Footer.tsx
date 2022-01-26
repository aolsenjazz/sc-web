import { Col, Nav, Row } from 'react-bootstrap';

type PropTypes = {};

export default function Footer(props: PropTypes) {
  return (
    <div id="footer" className="w-100 py-5 mt-5">
      <Row className="justify-content-md-center w-100">
        <Col xs="auto" className="mx-auto">
          <Nav>
            <Nav.Item>
              <Nav.Link href="privacy.pdf">Privacy Policy</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </div>
  );
}
