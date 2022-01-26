import { Stack, Container } from 'react-bootstrap';

type PropTypes = {};

export default function HowItWorks(props: PropTypes) {
  return (
    <Stack id="how-it-works" className="min-vh-100">
      <Container className="ms-6 w-100 my-auto">
        <p>
          Here's how<br></br>it works
        </p>
      </Container>
    </Stack>
  );
}
