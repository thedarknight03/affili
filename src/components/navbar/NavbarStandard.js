import React, { useState, useEffect } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  Modal,
  ModalBody,
  NavbarBrand,
  Container,
  NavLink,
  UncontrolledTooltip,
  CardBody,
  Card
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavbarDropdown from './NavbarDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';
import { pageRoutes, utilityRoutes, pluginRoutes, componentRoutes } from '../../routes';
import Login from '../auth/basic/Login';
import Registration from '../auth/basic/Registration';

const breakpoint = 'lg';

const NavbarStandard = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      dark
      fixed="top"
      expand={breakpoint}
      className={classNames('fs--1 font-weight-semi-bold navbar-standard navbar-theme', {
        'bg-dark': !navbarCollapsed
      })}
    >
      <Container>
        <NavbarBrand className="text-white" tag={Link} to="/">
          Aasaan
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
