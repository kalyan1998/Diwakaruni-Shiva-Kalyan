import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    // Function to group projects by domain
    const groupByDomain = (projects) => {
      return projects.reduce((acc, project) => {
        const domain = project.domain || "Others";
        if (!acc[domain]) {
          acc[domain] = [];
        }
        acc[domain].push(project);
        return acc;
      }, {});
    };

    // Specify the desired order of domains
    const domainOrder = [
      "My Work in Production",
      "Full Stack Development",
      "Machine Learning",
      "CyberSecurity",
    ];

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var groupedProjects = groupByDomain(this.props.resumeProjects);

      // Sort the domains according to the specified order
      var sortedDomains = domainOrder.filter((domain) => domain in groupedProjects);

      // Include any additional domains not specified in the order
      Object.keys(groupedProjects).forEach((domain) => {
        if (!sortedDomains.includes(domain)) {
          sortedDomains.push(domain);
        }
      });

      var projectSections = sortedDomains.map((domain) => {
        var projects = groupedProjects[domain].map((project) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={project.title}
              style={{ cursor: "pointer" }}
            >
              <span className="portfolio-item d-block">
                <div className="foto" onClick={() => detailsModalShow(project)}>
                  <div>
                    <img
                      src={project.images[0]}
                      alt="projectImages"
                      height="230"
                      style={{
                        marginBottom: 0,
                        paddingBottom: 0,
                        position: "relative",
                      }}
                    />
                    <span className="project-date">{project.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {project.title}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          );
        });

        return (
          <div key={domain}>
            <h2 className="domain-title">{domain}</h2>
            <div className="row mx-auto">{projects}</div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            {projectSections}
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
