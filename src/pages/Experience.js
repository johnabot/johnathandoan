import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Expected 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Texas at Arlington
          </h3>
          <p> BS - Software Engineering </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2021 - Aug 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          IT Innovation and Systems Intern - GM Financial
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Arlington, TX
          </h4>
          <ul>
              <li>Designed Architecture diagram for an OCR/AI project (Won Innovation of the Year in the company)</li>
              <li>Developed and Deployed Linux VM in Azure using Terraform for testing purposes.</li>
              <li>Designed the Architecture diagram for the RFID for cars to be able to collect data on the vehicles.</li>
              <li>Invested in employee training to ensure the company had the necessary skills and expertise to drive innovation.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2023 - July 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Analyst Intern - IWP Capital
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Forth Worth, TX
          </h4>
          <ul>
              <li>Web scraped SEC Edgar to pull 10-k forms using in python.</li>
              <li>Built out investor relations database. Retrieve emails for investor relations contacts for top 3,000 largest companies in U.S.</li>
              <li>Assist with screening and proxy voting service for over 4.6 billion of client assets. </li>
              <li>Clean Customer Relationship Management (CRM) database.</li>
          </ul>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2023 - Aug 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Cloud Administrator Intern - Arpa Cloud
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <ul>
              <li>Contributed to the management of cloud infrastructure, improving efficiency, and reducing downtime in Azure.</li>
              <li>Developed skills in configuring and maintaining cloud-based applications and services and troubleshooting.</li>
              <li>Utilized scripting and automation tools to streamline cloud operations, increasing productivity and reducing manual errors.</li>
              <li>Gained experience in disaster recovery and business continuity planning to ensure cloud security policies.</li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;