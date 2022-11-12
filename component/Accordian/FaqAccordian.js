import React from "react";
import { Accordion, useAccordionButton } from "react-bootstrap";
import styles from '../../styles/AccordianStyle.module.scss'


function ContextAwareToggle({ children, eventKey, callback }) {

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  // const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      // style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const FaqAccordian = () => {
  return (
    <Accordion defaultActiveKey="0" className={styles.faqAccordian}>
      <FaqAccordianItem
        eventKey="0"
        title="Why should I choose  House Shifting India Packers Movers?"
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consect petur adipiscing elit. eu fugiat nulla pariatur. Excepteur sint occaecat.
"
      />
      <FaqAccordianItem
        eventKey="1"
        title="How much time should I allow before contacting the moving company?"
        text="24 hours"
      />

    </Accordion>

  );
};

const FaqAccordianItem = ({ eventKey, title, text }) => {
  // console.log("props---------,",props)
  return (

    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
       {title}
      </Accordion.Header>
      <Accordion.Body>{text}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FaqAccordian;
