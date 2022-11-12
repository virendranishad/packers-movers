import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'
import styles from '../../styles/Header.module.scss';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import Topheader from './TopHeader';

const Header = () => {
    return (
        <header style={{ height: '1vh' }}>
            <div className={styles.HeaderStyle}>
                <Topheader />
                <Navbar expand="lg" className={`${styles.header} w-100 justify-content-between`} bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Image objectFit='fill' width={120} height={80}  src={logo} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className={`${styles.Header_content} ml-auto`}>
                                <Link activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="/">Home</Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="about">About Us</Link>

                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="service">Services</Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="faq">FAQ's</Link>
                                <Link
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    to="contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

        </header>
    );
};

export default Header;