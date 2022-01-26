import { Col, Row, Stack } from 'react-bootstrap';

type PropTypes = {
  imageSrc: string;
  backsplashColor: 'red' | 'yellow';
  order: number;
};

export default function Demo(props: PropTypes) {
  const { order, backsplashColor, imageSrc } = props;

  return (
    <Col lg={{ order: order, span: 7 }} xs={12}>
      <Row className="h-100">
        <Stack
          className={`${backsplashColor} text-center ratio ratio-4x3 my-auto`}
        >
          <Stack>
            <img
              src={imageSrc}
              alt={`tutorial-${order}`}
              className="mx-auto my-auto"
            />
          </Stack>
        </Stack>
      </Row>
    </Col>
  );
}
