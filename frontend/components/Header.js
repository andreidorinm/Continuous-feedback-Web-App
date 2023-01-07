import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import DropDownMenu from './DropDownMenu';
import { logout } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './Navbar.css';
import './Dropdown.css';
import './Button.css';
import './Menu.css';
// import './NavButtons.css'
import logo from './Logo/logotrilogy.png';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        className="navbar"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/" className="navbar-logo">
            <Navbar.Brand>
              {' '}
              <i>
                <Image src={logo} />
              </i>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <li className="nav-search">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </li>
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="nav-item">
                  <i className="fas fa-shopping-cart"></i> Coș
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title="produse" id="product">
                <div class="container-fluid">
                  <div class="row" center>
                    <li class="nav-item dropdown has-megamenu">
                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/rayban">
                            RAY-BAN
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/gucci">
                            GUCCI
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/burberry">
                            BURBERRY
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/armani">
                            EMPORIO ARMANI
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/dior">
                            DIOR
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link
                            className="btn btn-light sm-1"
                            to="/carolina-herrera"
                          >
                            CAROLINA HERRERA
                          </Link>
                        </center>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <center>
                          <Link className="btn btn-light sm-1" to="/produse">
                            Arată mai mute
                          </Link>
                        </center>
                      </NavDropdown.Item>
                    </li>
                  </div>
                </div>
              </NavDropdown>

              <LinkContainer to="/services">
                <Nav.Link className="nav-item">Servicii</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-item">Contact</Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login" className="nav-item">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Utilizatori</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Produse</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Comenzi</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
