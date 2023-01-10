import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { Typography } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

const Education = () => {
  return (
    <section id="education" className="time">
      <div className="edu__info">
        <Typography
          variant="h2"
          sx={{
            fontFamily: ["Roboto Mono, monospace"],
            fontWeight: 500,
            background:
              "linear-gradient( #cf59bf 7%, #61ff8b 43%, #cfcf5f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "1rem",
          }}
        >
          My Timeline
        </Typography>
      </div>
      {/* <div className="container container__education"> */}
      <VerticalTimeline lineColor="#fbef45">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(60,100,200)" }}
          date="2015-2020"
          iconStyle={{ background: "#fbef45", color: "#000" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Varee Chiang Mai International School
          </h3>
          <h4 className="vertical-timeline-element-description">
            Chiang Mai Thailand
          </h4>
          <p>Highschool Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August-November 2020"
          contentStyle={{ background: "#ee3838" }}
          iconStyle={{ background: "#ee3838", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant - World Health Organization(WHO) CIIC Project
          </h3>
          <p>
            - Coordinated data collection teams during community data collection
            <br />- designed 2D model for elderly nursing care house
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2020"
          contentStyle={{ background: "#ee3838" }}
          iconStyle={{ background: "#ee3838", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Teacher Assistant - Varee Chiang Mai International School
          </h3>
          <h4 className="vertical-timeline-element-description">
            Chiang Mai Thailand
          </h4>
          <p>
            Acted as the teacher's assistant for Highschool Computer Science
            classes
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-2022"
          contentStyle={{ background: "rgb(60,100,200)" }}
          iconStyle={{ background: "#fbef45", color: "#000" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Payap university International College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chiang Mai Thailand
          </h4>
          <p>Bachelors of Science in Information Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* </div> */}
    </section>
  );
};

export default Education;
