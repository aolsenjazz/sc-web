import { Container, Row } from 'react-bootstrap';

import Info from './Info';
import Demo from './Demo';

type PropTypes = {
  imageSrc: string;
  backsplashColor: 'red' | 'yellow';
  preTitle: string | undefined;
  title: string;
  body: string;
  mainSide: 'left' | 'right';
};

export default function Tutorial(props: PropTypes) {
  const { imageSrc, backsplashColor, preTitle, title, body, mainSide } = props;

  const imgIndex = mainSide === 'left' ? 0 : 1;
  const infoIndex = imgIndex === 0 ? 1 : 0;

  return (
    <Container className="tutorial py-5">
      <Row className="justify-content-md-center">
        <Demo
          imageSrc={imageSrc}
          backsplashColor={backsplashColor}
          order={imgIndex}
        />
        <Info preTitle={preTitle} title={title} body={body} order={infoIndex} />
      </Row>
    </Container>
  );
}
