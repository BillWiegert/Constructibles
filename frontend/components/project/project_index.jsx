import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }

  projectIndexItems() {
    return (
      <ul>
        {
          this.props.projects.map((project) => {
            return (
              <li
                className={`project-index-item project-${project.id}`}
                key={project.id}
              >
                <ProjectIndexItem project={project}/>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="project-index">
        {this.projectIndexItems()}
      </section>
    );
  }

}

export default ProjectIndex;
