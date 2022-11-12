import React from 'react';
import { Form } from 'react-bootstrap';
import Custombutton from '../Custombutton/Custombutton';
import styles from '../../styles/Contactform.module.scss'
const Contactform = () => {
    return (
        <div className={styles.contact_main}>
            <Form className={styles.contact_form}>
                <Form.Label className='text-white'>Personal Information
                </Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control size='lg' type="email" placeholder=" Email" />
                    <Form.Text className=" text-white">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="text" placeholder=" Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="text" placeholder="Phone " />
                </Form.Group>

                <Form.Label className='text-white'>Shifting Information

                </Form.Label>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="text" placeholder="Enter Move From" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="text" placeholder="Enter Move To" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control size='lg' type="text" placeholder="List of Items" />
                </Form.Group>

                <Custombutton className={styles.submit_btn} text="Submit" />
            </Form>
        </div>
    );
};

export default Contactform;