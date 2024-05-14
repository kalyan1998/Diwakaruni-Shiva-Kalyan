import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Credentials = ({ credentials }) => {
  return (
    <section id="credentials" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black", textAlign: "center" }}>
            Certifications & Publications
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {credentials && credentials.map((cred, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={cred.date}
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold"
              }}
              icon={<i className={`fas fa-${cred.type === "Certification" ? "certificate" : "book"} experience-icon`}></i>}
            >
              <div style={{ textAlign: "left", marginBottom: "4px" }}>
                <Badge pill className="main-badge mr-2 mb-2">{cred.type}</Badge>
                {cred.badgeUrl && <img src={cred.badgeUrl} alt="Badge" style={{ height: "50px", marginLeft: "10px" }} />}
              </div>
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left", fontWeight: "bold", fontStyle: "italic" }}>
                {cred.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
                {cred.issuer || "Published Work"}
              </h4>
              <p style={{ textAlign: "left", marginTop: "15px" }}>{cred.description}</p>
              {cred.url && (
                <a href={cred.url} target="_blank" rel="noopener noreferrer" style={{ textAlign: "left", marginTop: "15px", display: "block" }}>
                  {cred.type === "Certification" ? "View Credentials" : "Publication Details"}
                </a>
              )}
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-end mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Credentials;
