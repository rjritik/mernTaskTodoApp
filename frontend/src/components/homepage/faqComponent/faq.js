import React, { useState } from "react";
import "./faq.css";
import Navbar from "../Home/nav/Nav";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="setAccordion">
        <Accordion style={{ width: 800 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 40,
              }}
            >
              <b>Accordion Demo</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Greetings of the day :)</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: 800 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <b> About Project</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              These Project is about creating a Todo - application
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: 800 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography
              style={{
                fontWeight: 10,
              }}
            >
              <b>Tech Stack Used</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             React js, Node js, MongoDb, Express js,Javascript
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
export default FAQ;
