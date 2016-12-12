import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project, router }) => {
  return (
    <div>
      <Link to={ `/projects/${project.id}` }>
        <div className="cover-image"></div>
      </Link>
      <div className="project-info-bar">
        <span className="title">
          { project.title }
        </span>
        <br/>
        <span className="author">
          { project.user.username }
        </span>
      </div>
    </div>
  );
};

export default ProjectIndexItem;
