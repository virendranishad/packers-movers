import React from 'react';
import { Button } from 'react-bootstrap';
import styles from  '../../styles/Custombutton.module.scss'

const Custombutton = (props) => {
    return (
        <>
            <Button
                className={`${styles.common_btn} ${props.className}`}
                variant="transparent">
                {props.text}
            </Button>

        </>
    );
};

export default Custombutton;