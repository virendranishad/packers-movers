import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Header.module.scss'
import { BiPhone } from 'react-icons/bi'
import { RiMailFill } from 'react-icons/ri'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
const Topheader = () => {
    return (
        <>
            <div className={`${styles.top_header}`}>
                <Container>
                    <div className={`${styles.header_wrap}`}>
                        <div className={styles.social_links}>
                            <ul>
                                <li><a href="#"><span><BiPhone size={20} color='black' name='phone' /></span>+91 9555660669 </a></li>
                                <li><a href="mailto:nitvirendra@gmail.com"><span>
                                    <RiMailFill name='mail' color='black' size={20} />
                                </span> nitvirendra@gmail.com
                                </a></li>
                            </ul>
                        </div>
                        <div className={styles.social_links}>
                            <ul>
                                <li><a href="#"><span> <FaFacebookF name='facebook' size={20} style={{ color: '#302c77' }} type='logo' />
                                </span></a></li>
                                <li><a href="#"><span>
                                    <BsInstagram name='instagram' size={20} type='logo' color='red' />
                                </span></a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div >
        </>
    );
};

export default Topheader;