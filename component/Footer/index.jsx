import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import styles from '../../styles/Footer.module.scss'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className={`${styles.site_footer}`}>
                <div className={`${styles.inner_footer}`}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={3}>
                                <div className={`${styles.footer_links} ${styles.footer_logo}`}>
                                    <Image src={logo} alt="Logo" loading='lazy' />
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div className={styles.footer_links}>
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/">Services</Link></li>
                                        <li><Link href="/">About Us</Link></li>
                                        <li><Link href="/">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div className={`${styles.footer_links} ${styles.footer_logo}`}>

                                    <h5>Contact Us</h5>
                                    <a href="mailto:nitvirendra@gmail.com">nitvirendra@gmail.com</a>

                                    <p>Khar (East) Mumbai 400 055

                                    </p>
                                </div>
                            </Col>
                            <Col xs={6} md={3}>
                                <div className={`${styles.footer_links} ${styles.footer_social_media}`}>
                                    <h5>Social Media</h5>
                                    <ul>
                                        <li><a href="#"><FaFacebookF name='facebook' type='logo' size={20}  className='mx-1'></FaFacebookF> facebook</a></li>
                                        <li><a href=" #" target="_blank"><BsInstagram name='instagram' size={20} type='logo' className='mx-1' ></BsInstagram> Instagram</a></li>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div  className={`${styles.copyrightfooter} text-center`} >
                    <Container>
                        <p>Mahi Professional Packers Movers | Powered by Mahi Professional Packers Movers</p>
                    </Container>
                </div>
            </footer>

        </>
    );
};

export default Footer;