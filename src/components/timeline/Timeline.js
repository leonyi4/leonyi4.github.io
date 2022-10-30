import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Education = () => {
  return (
    <section id="education" className="time">
      <div className="edu__info">
        <h2 style={{color:"var(--color-primary)"}}>My TimeLine</h2>
      </div>
      <div className="container container__education">
        <VerticalTimeline lineColor="#fbef45">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            style={{ color: "#fff" }}
            contentStyle={{ background: "rgb(255,255,255)" }}
            date="2015-2020"
            iconStyle={{ background: "#fbef45", color: "#000" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My highschool, Varee International School, Chiang Mai Thailand
            </h3>
            <h4 className="vertical-timeline-element-description">
              Highschool Diploma
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August-November 2020"
            style={{ color: "#fff" }}
            iconStyle={{ background: "#ee3838", color: "#000" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Research Assistant - World Health Organization(WHO) CIIC Project
            </h3>
            <h4 className="vertical-timeline-element-description">
              Coordinated data collection teams during community data collection
              <br />
              designed 2D model for elderly nursing care house
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019-2020"
            style={{ color: "#fff" }}
            iconStyle={{ background: "#ee3838", color: "#000" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Teacher Assistant - Varee International School, Chiang Mai
              Thailand
            </h3>
            <h4 className="vertical-timeline-element-description">
              Acted as the teacher's assistant for Highschool Computer Science
              classes
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020-2022"
            style={{ color: "#fff" }}
            iconStyle={{ background: "#fbef45", color: "#000" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My university, Payap International College, Chiang Mai Thailand
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelors of Science in Information Technology
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
