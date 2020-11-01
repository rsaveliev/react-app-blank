import React from 'react';
import MUIAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import './style.scss';

const Accordion = ({ title, body }) => (
  <MUIAccordion
    TransitionProps={{ unmountOnExit: true }}
    className="mui-accordion"
  >
    <AccordionSummary
      aria-controls="panel1a-content"
    >
      { title && title() }
    </AccordionSummary>
    <AccordionDetails className="accordion-details">
      { body && body() }
    </AccordionDetails>
  </MUIAccordion>
);

export default Accordion;
