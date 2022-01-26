import { useState, useEffect } from 'react';

import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LogoWhite } from '../assets/logo_white.svg';

import DownloadButton from './DownloadButton';

type PropTypes = {};

export default function TitleBar(props: PropTypes) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDocked(scrollPosition === 0 && !open);
  }, [open, scrollPosition]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      onToggle={(open) => setOpen(open)}
      className={`w-100 ${docked ? 'navbar-docked' : 'navbar-scrolled'}`}
    >
      <Navbar.Brand href="#home" className="mx-lg-5 mx-2">
        {docked ? <LogoWhite height="32" /> : <Logo height="32" />}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
      <Navbar.Collapse className="justify-content-end me-md-5">
        <Nav className="mx-3">
          <Nav.Link href="mailto:aolsenjazz@gmail.com">CONTACT</Nav.Link>
          <Nav.Link href="https://github.com/aolsenjazz/super-controller">
            SOURCE
          </Nav.Link>
          <NavDropdown title="DOWNLOAD" align="end">
            <DownloadButton platform="mac" variant="link" />
            <DownloadButton platform="arm64" variant="link" />
            <Dropdown.Divider />
            <NavDropdown.Item
              href="https://support.apple.com/en-us/HT211814"
              target="_blank"
            >
              Intel vs. M1
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
