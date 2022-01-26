import { Container, Col, Stack, Form, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';
import Laptop from '../assets/laptop.png';

type PropTypes = {};

export default function Splash(props: PropTypes) {
  return (
    <Stack id="splash" className="min-vh-100 pt-5">
      <Container className="ps-6 h-100 my-auto">
        <Row className="justify-content-center px-lg-5">
          <Col sm={12} lg={5} className="my-5">
            <Stack className="justify-content-center">
              <Row className="gx-3  py-4">
                <h1 className="w-auto mx-auto mx-md-0">GIVE YOUR</h1>
                <h1 className="w-auto mx-auto mx-md-0">MIDI DEVICES</h1>
                <h1 className="emphasis w-auto mx-auto m-md-0">SUPERPOWERS</h1>
              </Row>
              <h4 className="mx-auto m-md-0">
                Take control of the lights, messages, and<br></br>
                communications between controllers.
              </h4>
              <Form className="me-5 mt-3 mx-auto mx-md-0 col-me-2">
                <DownloadButton platform="mac" className="me-2 mb-2" />
                <DownloadButton platform="arm64" className="mb-2" />
              </Form>
            </Stack>
          </Col>
          <Col sm={12} lg={7} className="my-5">
            <img
              src={Laptop}
              alt="computer with super-controller active"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}
