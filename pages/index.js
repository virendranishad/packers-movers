import Image from 'next/image';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import banner from '../public/images/slide-2.jpg';
import about from '../public/images/slider-moving.jpg'
import styles from '../styles/Home.module.scss'
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineDropbox } from 'react-icons/ai'
import { BsShieldCheck } from 'react-icons/bs'
import { BiWorld, BiPackage, BiCart, BiGift, BiHourglass } from 'react-icons/bi'
import { FaShip } from 'react-icons/fa'
import FaqAccordian from '../component/Accordian/FaqAccordian'
import Contactform from '../component/Contactform/Contactform'
export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div id='/' className={styles.banner}>
          <Image src={banner} objectFit='cover' />
        </div>
        <div id="about" className={styles.about_us}>
          <Container>
            <Row>
              <Col lg={6} className={styles.about_col}>
                <h4 className={styles.small_heading}>About Us</h4>
                <h2>Safely Moving Your Valuable Products
                </h2>
                <p>

                  The Packers Movers (mahiprofessionalpackersmovers.com) is one of the
                  India’s leading reputed online moving companies booking platforms that
                  started its journey in 2021 with an objective to make the search for dependable
                  packers and movers in India a hassle-free one for the people.This website is a
                  resourceful online database where people can find a list of packer and
                  mover service providers available in Mumbai,NCR cities..
                </p>
                <ul>
                  <li>
                    <FaTruckMoving size={24} name='truck' />
                    <p>Free Estimate</p>
                  </li>
                  <li>
                    <AiOutlineDropbox name='dropbox' size={24} />
                    <p>Packaging & Unpacking</p>
                  </li>
                  <li>
                    <BsShieldCheck name='sheild' size={24} />
                    <p>Moving Protection</p>
                  </li>
                </ul>
              </Col>
              <Col lg={6} className={styles.about_img}>
                <Image className='img-fluid' src={about} />
              </Col>
            </Row>
          </Container>
        </div>
        <div id="service" className={styles.services}>
          <Container>
            <Row>
              <Col md={12} className="mb-5">
                <h4 className={styles.small_heading} >Our Services</h4>
                <h2 className={styles.heading}>Services We Provide </h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consect petur adipiscing elit. eu fugiat nulla pariatur. Excepteur sint occaecat.
                </p>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span>  <BiWorld size={24} name='world'></BiWorld></span>
                  <h3>Home Shifting
                  </h3>
                  <br></br>
                  <p>We have professional teams to shift home expertise .That hepl us pack and unpack safely.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span><BiPackage name='package' size={24} ></BiPackage></span>
                  <h3>Bike Transport

                  </h3>
                  <br></br>

                  <p>We provide quick and cost-effective bike transport service.

                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span>  <BiCart name='cart-add' size={24} ></BiCart></span>
                  <h3>Office Shifting

                  </h3>
                  <p>Office packing and moving process operated with care.Computers and other 
                  office goods are moved in a specially designed container.

                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span>  <FaShip name='ship' size={24} type='solid' ></FaShip></span>
                  <h3>Car Transport

                  </h3>
                  <br></br>
                  <br></br>

                  <p>We are provide the door to door service of car transport for all India. On time delivery

                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span>  <BiGift name='gift' size={24} type='solid' ></BiGift></span>
                  <h3>Commercial Shifting

                  </h3>
                  <p>Mahi professional packers movers have years of knowledge and experience in
                    relocating the commercial goods.We provide customized services
                    to handle your specific needs.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.service_col}>
                  <span> <BiHourglass name='hourglass' size={24} type='solid' ></BiHourglass></span>
                  <h3>Loading / Unloading

                  </h3>
                  <p>A crucial part of every relocation process is loading and unloading,
                    In mahi professional Packers And Movers loading and unloading is executed by professional teams.

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="faq" className={styles.faq_sec}>
          <Container>
            <Row>
              <Col md={12} className="mb-5">
                <h4 className={styles.small_heading}>FAQ</h4>
                <h2 className={styles.heading}>
                  Frequently Asked Questions

                </h2>
              </Col>
              <Col md={12} className="mb-5">
                <FaqAccordian />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <iframe src=
        {"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6089607876256!2d72.84271431547458!3d19.080922987085117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9074f57f949%3A0x8bbf329e379dd680!2sKaypee%20Cyber%20Cafe!5e0!3m2!1sen!2sin!4v1661164255632!5m2!1sen!2sin"} width="100%" height="707" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div id='contact' className='mt-3'>
        <h2 className='text-center'>Contact Us</h2>
        <Contactform />
      </div>

      {/* <div id="contact" className={styles.contact_us}>
        <Container fluid>
          <Row>
            <Col lg={12}>
              <iframe src=
                {"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6089607876256!2d72.84271431547458!3d19.080922987085117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9074f57f949%3A0x8bbf329e379dd680!2sKaypee%20Cyber%20Cafe!5e0!3m2!1sen!2sin!4v1661164255632!5m2!1sen!2sin"} width="100%" height="707" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col lg={6} className="">
          <div>
            <h2>Contact Us</h2>
            <Contactform />
          </div>
        </Col>
      </Row> */}
    </>
  );
};
