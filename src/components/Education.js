import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var education = this.props.resumeEducation.map(function (edu, i) {
        const coursework = edu.coursework;
        const mainCoursework = edu.mainCoursework;
        var classname;

        var mainCourses = mainCoursework.map((course, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {course}
            </Badge>
          );
        });
        var courses = coursework.map((course, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {course}
            </Badge>
          );
        });

        if (mainCourses[0].props.children.substring(0, 4) === "Pyth") {
          classname = "devicon-python-plain";
        } else {
          classname = "devicon-cplusplus-plain";
        }

        var description = edu.description.map((bulletPoint, i) => {
          return (
            <li key={i}>{bulletPoint}</li>
          );
        });

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={edu.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold"
            }}
            icon={<i className={classname + " language-icon"}></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainCourses}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left", fontWeight: "bold", fontStyle: "italic" }}
            >
              {edu.degree}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {edu.university}
            </h4>
            <ul style={{ textAlign: "left", marginTop: "15px" }}>{description}</ul>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{courses}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {education}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
