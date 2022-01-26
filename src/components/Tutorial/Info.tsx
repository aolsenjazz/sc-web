import { useRef } from 'react';
import { Col } from 'react-bootstrap';
import { animated, useSpring, useSpringRef, useChain } from '@react-spring/web';

import { useOnScreen } from '../../hooks/use-on-screen';

type PropTypes = {
  preTitle: string | undefined;
  title: string;
  body: string;
  order: number;
};

export default function Label(props: PropTypes) {
  const { preTitle, title, body, order } = props;

  const h3Ref = useRef(null);
  const isVisible = useOnScreen(h3Ref);

  const baseStyle = { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 };

  const h5SpringRef = useSpringRef();
  const h5Style = useSpring({
    ...baseStyle,
    ref: h5SpringRef,
  });

  const h3SpringRef = useSpringRef();
  const h3Style = useSpring({
    ...baseStyle,
    ref: h3SpringRef,
  });

  const pSpringRef = useSpringRef();
  const pStyle = useSpring({
    ...baseStyle,
    ref: pSpringRef,
  });

  useChain([h5SpringRef, h3SpringRef, pSpringRef]);

  return (
    <Col lg={{ order: order, span: 5 }} xs={12} className="align-self-center">
      <animated.h5 className="mx-lg-5 mb-lg-2 mt-4" style={h5Style}>
        {preTitle}
      </animated.h5>
      <animated.h3 className="mx-lg-5 lg-4 pb-lg-4" style={h3Style} ref={h3Ref}>
        {title}
      </animated.h3>
      <animated.p className="mx-lg-5" style={pStyle}>
        {body}
      </animated.p>
    </Col>
  );
}
