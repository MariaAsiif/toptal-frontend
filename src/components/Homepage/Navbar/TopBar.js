import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import cart from "../../../assets/cart.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import featherMenu from "../../../assets/Icon feather-menu.svg";
import warningIcon from "../../../assets/warning-icon.svg";
import { HeaderTopBar } from "./StyledNavbar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SideNavBar from './SideCanvas'

const TopBar = ({ setShow }) => {
  const history = useHistory();


  const [navbar, setNavbar] = useState(false);


  const [sideNavShow, setSideNavShow] = useState(false);

  const handleClose = () => setSideNavShow(false);
  const handleShow = () => setSideNavShow(true);



  const changeBackground = () => {
    window.onwheel = (e) => {
      if (e.deltaY >= 0) {
        // Scrolling Down with mouse
        setNavbar(true);
      } else {
        // Scrolling Up with mouse
        setNavbar(false);
      }
    };
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <HeaderTopBar>
      <SideNavBar show={sideNavShow} handleClose={handleClose} />
      <div className="topBar-Header">
        <Navbar bg="transparent" variant="dark">
          <div className="reponsive-topbar-toggler" >
            <img className="img-fluid" src={featherMenu} alt="featherMenu"  onClick={handleShow} />
          </div>

          <Container>
            <Navbar.Brand href="#">
              <img
                className="img-fluid header-topBar-logo"
                src={logo}
                alt="logo"
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#" className="topbar-nav-icon">
                <img
                  className="img-fluid"
                  src={warningIcon}
                  alt="featherMenu"
                />
              </Nav.Link>
              <Nav.Link href="#" className="topbar-nav-icon">
                <img className="img-fluid" src={searchIcon} alt="featherMenu" />
              </Nav.Link>
              <Nav.Link href="#" className="topbar-nav-icon">
                <img
                  className="img-fluid"
                  src={profile}
                  alt="featherMenu"
                />
              </Nav.Link>
              <Nav.Link
                href="#"
                className="topbar-nav-icon"
              >
                <img className="img-fluid" src={cart} alt="featherMenu" />
              </Nav.Link>
              <Nav.Link href="#" className="topbar-nav-icon">
                <img
                  onClick={() => setShow(true)}
                  className="img-fluid"
                  src={featherMenu}
                  alt="featherMenu"
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </HeaderTopBar>
  );
};

export default TopBar;
