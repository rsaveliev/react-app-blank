import React from 'react';
import { bool } from 'prop-types';

import MUIAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import './style.scss';

const Accordion = ({ title, body, unmountOnExit, defaultExpanded }) => (
  <MUIAccordion
    TransitionProps={{ unmountOnExit: unmountOnExit }}
    defaultExpanded={defaultExpanded}
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

Accordion.propTypes = {
  unmountOnExit: bool,
  defaultExpanded: bool,
};

Accordion.defaultProps = {
  unmountOnExit: false,
  defaultExpanded: false,
};

export default Accordion;
